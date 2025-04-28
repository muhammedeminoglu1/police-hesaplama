"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { hesaplaKapsam, AySonucu } from "../../lib/utils";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as XLSX from "xlsx";

function SonucContent() {
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
    const wsSonuclar = XLSX.utils.json_to_sheet(sonuclar.map((s, idx) => ({
      "Dönem": s.ay,
      "Gün Sayısı": s.kapsananGun,
      "Prim Tutarı (TL)": s.taksitTutar.toFixed(2),
      "3 Aylık Toplam (TL)": ((idx + 1) % 3 === 0)
        ? (sonuclar[idx - 2].taksitTutar + sonuclar[idx - 1].taksitTutar + s.taksitTutar).toFixed(2)
        : "-"
    })));

    const wsKkeg = XLSX.utils.json_to_sheet(sonuclar.map(s => ({
      "Dönem": s.ay,
      "Prim Tutarı (TL)": s.taksitTutar.toFixed(2),
      "KKEG (30%) (TL)": s.kkeg.toFixed(2)
    })));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsSonuclar, "Hesaplama Sonuçları");
    XLSX.utils.book_append_sheet(wb, wsKkeg, "KKEG Detayları");
    XLSX.writeFile(wb, "poliçe-sonuçları.xlsx");
  };

  const kkegSayfasinaGit = () => {
    router.push(`/kkeg?start=${start}&end=${end}&total=${total}`);
  };

  return (
    <main className="p-8 min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Hesaplama Sonuçları</h1>

      <div className="flex justify-end mb-4 gap-4">
        <button
          onClick={kkegSayfasinaGit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-lg"
        >
          KKEG Detaylarını Gör
        </button>

        <button
          onClick={excelIndir}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded text-lg"
        >
          Excel İndir
        </button>

        <button
          onClick={() => router.push("/")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded text-lg"
        >
          Anasayfaya Dön
        </button>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full border-collapse border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Dönem</th>
              <th className="border p-2">Ay</th>
              <th className="border p-2">Gün Sayısı</th>
              <th className="border p-2">Prim Tutarı</th>
              <th className="border p-2">3 Aylık</th>
            </tr>
          </thead>
          <tbody>
            {sonuclar.map((item, idx) => (
              <tr key={idx}>
                <td className="border p-2">{item.ay.split(" - ")[0]}</td>
                <td className="border p-2">{item.ay.split(" - ")[1]}</td>
                <td className="border p-2 text-center">{item.kapsananGun}</td>
                <td className="border p-2 text-right">{item.taksitTutar.toFixed(2)} TL</td>
                <td className="border p-2 text-right">
                  {(idx + 1) % 3 === 0
                    ? (sonuclar[idx - 2].taksitTutar + sonuclar[idx - 1].taksitTutar + item.taksitTutar).toFixed(2) + " TL"
                    : "-"
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default function SonucPage() {
  return (
    <div>
      <TopBar />
      <Header />

      <Suspense fallback={<div>Yükleniyor...</div>}>
        <SonucContent />
      </Suspense>

      <Footer />
    </div>
  );
}
