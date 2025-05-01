"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { hesaplaKapsam, AySonucu } from "../../lib/utils";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as XLSX from "xlsx";

function KkegContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const start = searchParams.get("start") || "";
  const end = searchParams.get("end") || "";
  const total = Number(searchParams.get("total")) || 0;

  const [sonuclar, setSonuclar] = useState<AySonucu[]>([]);

  useEffect(() => {
    if (start && end && total) {
      const hesaplanan = hesaplaKapsam(start, end, total);
      setSonuclar(hesaplanan);
    }
  }, [start, end, total]);

  const excelIndir = () => {
    const wsKkeg = XLSX.utils.json_to_sheet(
      sonuclar.map((s) => ({
        "Dönem": s.ay,
        "Prim Tutarı (TL)": s.taksitTutar,
        "KKEG (30%) (TL)": s.kkeg,
      }))
    );

    // Toplam satırı
    const toplamPrim = sonuclar.reduce((sum, s) => sum + s.taksitTutar, 0);
    const toplamKkeg = sonuclar.reduce((sum, s) => sum + s.kkeg, 0);

    XLSX.utils.sheet_add_json(
      wsKkeg,
      [
        {
          "Dönem": "TOPLAM",
          "Prim Tutarı (TL)": toplamPrim,
          "KKEG (30%) (TL)": toplamKkeg,
        },
      ],
      { skipHeader: true, origin: -1 }
    );

    // Sayısal hücre biçimini Excel'e uygula
    const range = XLSX.utils.decode_range(wsKkeg["!ref"]!);
    for (let R = range.s.r + 1; R <= range.e.r; ++R) {
      for (let C = 1; C <= 2; ++C) {
        const cell_address = { c: C, r: R };
        const cell_ref = XLSX.utils.encode_cell(cell_address);
        const cell = wsKkeg[cell_ref];
        if (cell && typeof cell.v === "number") {
          cell.t = "n";
          cell.z = "#,##0.00";
        }
      }
    }

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsKkeg, "KKEG Detayları");
    XLSX.writeFile(wb, "kkeg-detaylari.xlsx");
  };

  const formatTL = (deger: number) =>
    deger.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <main className="p-8 min-h-screen bg-gradient-to-b from-blue-100 to-white font-sans">
      <h1 className="text-3xl font-bold mb-8 text-center">KKEG Hesaplama Detayları</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Dönem</th>
              <th className="border p-2">Prim Tutarı</th>
              <th className="border p-2">KKEG (30%)</th>
            </tr>
          </thead>
          <tbody>
            {sonuclar.map((item, idx) => (
              <tr key={idx}>
                <td className="border p-2">{item.ay}</td>
                <td className="border p-2 text-right">{formatTL(item.taksitTutar)} TL</td>
                <td className="border p-2 text-right">{formatTL(item.kkeg)} TL</td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-semibold">
              <td className="border p-2">TOPLAM</td>
              <td className="border p-2 text-right">
                {formatTL(sonuclar.reduce((acc, s) => acc + s.taksitTutar, 0))} TL
              </td>
              <td className="border p-2 text-right">
                {formatTL(sonuclar.reduce((acc, s) => acc + s.kkeg, 0))} TL
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Butonlar */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={excelIndir}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded text-lg"
        >
          Excel İndir
        </button>

        <button
          onClick={() => router.push(`/sonuc?start=${start}&end=${end}&total=${total}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-lg"
        >
          Önceki Sayfaya Dön
        </button>
      </div>
    </main>
  );
}

export default function KkegPage() {
  return (
    <div>
      <TopBar />
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <KkegContent />
      </Suspense>

      <Footer />
    </div>
  );
}
