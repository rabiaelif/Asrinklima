import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import ScrollToTop from "./components/ScrollToTop";
import HomeFooter from "./components/layout/HomeFooter";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.asrinklima.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asrın Klima Isıtma, Soğutma ve Havalandırma Sistemleri",
    template: "%s | Asrın Klima",
  },
  description: "Asrın Klima, klima montajı, bakımı ve tamiri ile birlikte ısıtma-soğutma sistemlerinde profesyonel çözümler sunar. Kaliteli hizmet, uygun fiyat!",
  authors: [{ name: "Asrın Klima" }],
  creator: "Asrın Klima",
  publisher: "Asrın Klima",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
      </head>
      <body className={outfit.className}>
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