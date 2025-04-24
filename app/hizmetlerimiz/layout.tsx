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

      <div className="flex flex-1">
        <aside className="top-0 left-0 w-76 z-20 overflow-y-auto hidden lg:block">
          <Sidebar />
        </aside>

        <div className="flex-1">
          <div id="top"></div>

          <main className="relative min-h-screen mx-auto w-full lg:px-8 container lg:p-4 px-4 pb-4 z-30">
            {children}
          </main>

          <footer className="z-30 mt-4 relative">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
