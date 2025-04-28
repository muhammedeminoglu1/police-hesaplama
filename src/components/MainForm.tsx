import React from 'react';

export default function MainForm() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg px-8 py-10 -mt-20 relative z-20">
      <form className="space-y-6">
        <div>
          <label className="block text-[#143860] font-semibold mb-2">Poliçe türü</label>
          <select className="w-full border-gray-300 rounded-lg px-3 py-2">
            <option>Binek</option>
            <option>Ticari</option>
            <option>Konut</option>
          </select>
        </div>

        <div>
          <label className="block text-[#143860] font-semibold mb-2">Araç Değeri</label>
          <input type="number" placeholder="Araç değeri girin" className="w-full border-gray-300 rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-[#143860] font-semibold mb-2">Plaka</label>
          <input type="text" placeholder="34 ABC 123" className="w-full border-gray-300 rounded-lg px-3 py-2" />
        </div>

        <div className="flex items-center">
          <input id="privacy" type="checkbox" className="mr-2" />
          <label htmlFor="privacy" className="text-sm text-gray-600">KVKK Sözleşmesini okudum, onaylıyorum.</label>
        </div>

        <button type="submit" className="w-full bg-[#41aad8] hover:bg-[#15447b] text-white font-bold py-3 rounded-xl shadow transition-colors mt-2 text-lg">Hesapla</button>
      </form>
    </div>
  );
}
