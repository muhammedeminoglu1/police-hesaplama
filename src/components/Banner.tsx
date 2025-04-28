import React from 'react';

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-[#15447b] to-[#41aad8] py-16 flex flex-col items-center justify-center text-white text-center">
      {/* Decorative/abstract graphics can be svg or css in the future */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Placeholder for future SVG abstract shapes */}
      </div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Poliçe Hesaplama</h1>
        <p className="text-lg md:text-2xl font-medium opacity-90">En güncel ve güvenilir şekilde poliçe hesaplamanızı yapın</p>
      </div>
    </section>
  );
}
