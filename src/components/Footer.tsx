import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#143860] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="https://www.ekremkilavuz.com/img/logo.svg" alt="Logo" className="h-10 mb-2" />
          <p className="text-sm opacity-80 mb-3">POLİÇE HESAPLAMA</p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Instagram"><span className="hover:text-gray-300">📷</span></a>
            <a href="#" aria-label="Facebook"><span className="hover:text-gray-300">📘</span></a>
            <a href="#" aria-label="Twitter"><span className="hover:text-gray-300">🐦</span></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Bağlantılar</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Anasayfa</a></li>
            <li><a href="#" className="hover:underline">Hizmetler</a></li>
            <li><a href="#" className="hover:underline">Hesaplamalar</a></li>
            <li><a href="#" className="hover:underline">İletişim</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">İletişim</h4>
          <ul className="space-y-1 text-sm">
            <li>📍 Random, Türkiye</li>
            <li>📞 (555) 555 55 55</li>
            <li>✉ info@ornekpolice.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Bilgilendirme</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li>Kişisel verileriniz korunmaktadır.</li>
            <li>Tüm hakları saklıdır &copy; {new Date().getFullYear()}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
