import React from 'react';

export default function Newsletter() {
  return (
    <section className="w-full bg-gradient-to-br from-[#15447b] to-[#41aad8] py-10 text-white flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Yeniliklerden Haberdar Olun</h2>
      <p className="opacity-90 mb-4">En güncel sigorta haberleri ve kampanyalarda ilk siz bilgilendirin.</p>
      <form className="flex flex-col md:flex-row gap-2 items-center justify-center w-full max-w-md mx-auto">
        <input type="email" placeholder="Eposta adresiniz" className="px-4 py-2 rounded-l-md text-gray-900 w-full md:w-auto focus:outline-none" />
        <button type="submit" className="bg-[#143860] hover:bg-[#10547a] px-6 py-2 rounded-r-md font-bold transition-colors">Abone Ol</button>
      </form>
    </section>
  );
}
