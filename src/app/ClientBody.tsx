"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientBody() {
  const router = useRouter();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [total, setTotal] = useState<number | string>("");
  const [kvkk, setKvkk] = useState(false);

  const handleClick = () => {
    if (!start || !end || !total) {
      alert("Tüm alanları doldurun!");
      return;
    }
    if (!kvkk) {
      alert("KVKK sözleşmesini onaylamalısınız.");
      return;
    }

    // URL üzerinden verileri taşıyarak sonuc sayfasına yönlendiriyoruz
    const query = `?start=${start}&end=${end}&total=${total}`;
    router.push(`/sonuc${query}`);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Poliçe Gün Hesaplama</h1>

        <div className="flex flex-col gap-4">
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Başlangıç Tarihi"
          />
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Bitiş Tarihi"
          />
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Toplam Tutar (TL)"
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={kvkk}
              onChange={(e) => setKvkk(e.target.checked)}
              id="kvkk"
              className="w-4 h-4"
            />
            <label htmlFor="kvkk" className="text-sm text-gray-600">
              KVKK Sözleşmesini okudum ve onaylıyorum.
            </label>
          </div>

          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded text-lg"
          >
            Hesapla
          </button>
        </div>
      </div>
    </div>
  );
}
