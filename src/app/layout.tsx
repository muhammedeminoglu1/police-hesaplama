// ... existing code ... <all other imports and boilerplate>
import './globals.css';
export const metadata = {
  title: "Poliçe Hesaplama",
  description: "Güncel poliçe hesaplama ve KKEG detayları",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: `'Raleway', 'Open Sans', Arial, sans-serif` }}>
        {children}
      </body>
    </html>
  );
}
// ... existing code ... <rest of file if present>
