import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import ScrollToTop from "./components/ScrollToTop";
import HomeFooter from "./components/layout/HomeFooter";

const siteUrl = "https://www.asrinklima.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asrın Klima Isıtma, Soğutma ve Havalandırma Sistemleri",
    template: "%s",
  },
  description: "Asrın Klima, klima montajı, bakımı ve tamiri ile birlikte ısıtma-soğutma sistemlerinde profesyonel çözümler sunar. Kaliteli hizmet, uygun fiyat!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Asrın Klima",
    locale: "tr_TR",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/logo.png",
        alt: "Asrın Klima",
      },
    ],
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
      <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <header className="">
            <Header />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-auto z-30">
            <HomeFooter/>
          </footer>
        </div>
      </body>
    </html>
  );
}