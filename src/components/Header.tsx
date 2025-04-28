import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex space-x-6 p-4 justify-center">
        <li><Link href="/">Anasayfa</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/hakkimizda">Hakkımızda</Link></li>
        <li><Link href="/iletisim">İletişim</Link></li>
      </ul>
    </nav>
  );
}
