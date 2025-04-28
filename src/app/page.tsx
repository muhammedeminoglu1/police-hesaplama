"use client";

import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ClientBody from "./ClientBody";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Poliçe Nedir? Neden Önemlidir?",
    description: "Poliçeler hakkında temel bilgiler. Sigorta süreçlerine hızlı bakış.",
  },
  {
    id: 2,
    title: "KKEG (Kanunen Kabul Edilmeyen Giderler) Hesaplama",
    description: "KKEG nedir, nasıl bulunur, muhasebe kayıtlarıyla ilişkisi.",
  },
  {
    id: 3,
    title: "Araç Sigortalarında 2025 Değişiklikleri",
    description: "Yeni düzenlemeler sonrası araç sigortalarındaki değişiklikler.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Üst Bilgi Alanı */}
      <TopBar />

      {/* Menü */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Ana İçerik */}
      <main className="p-8 flex flex-col gap-16">

        {/* Poliçe Hesaplama Formu */}
        <section>
          <ClientBody />
        </section>

        {/* Blog Yazıları Bölümü */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Son Blog Yazıları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                  Yazının Devamı →
                </Link>
              </div>
            ))}
          </div>

          {/* Tüm Bloglara Git Butonu */}
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
              Tüm Yazıları Gör
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <section>
          <Newsletter />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
