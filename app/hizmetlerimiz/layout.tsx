import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Services/Sidebar";
import ImageServices from "../components/Services/ImageServices";
import Footer from "../components/layout/Footer";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10">
        <ImageServices />
        </div>
      <div className="flex flex-1 ">
        <aside className="w-76 z-20 lg:flex hidden">
          <Sidebar />
        </aside>
        <div className="flex-1">
          <main className="relative min-h-screen mx-auto w-full lg:px-6 px-4 container p-4 z-30">{children}</main>
          <footer className="z-30 mt-4 relative ">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
