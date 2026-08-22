import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="text-center w-full flex-col space-y-4 sm:space-y-6 px-4 bg-black flex justify-center h-screen items-center">
      <h1 className="sm:text-3xl text-2xl font-semibold text-red-600">404 - Sayfa Bulunamadı</h1>
      <h2 className="text-whiteB text-xl font-semibold">Üzgünüz, Aradığınız Sayfa Bulunamadı
      </h2>
      <p className="text-whiteB max-w-xl">
        Girmeye çalıştığınız sayfanın adresi bulunamadı. Bu durum, sayfanın adresinin değişmiş veya kaldırılmış olmasından kaynaklanıyor olabilir.

        Ancak endişelenmeyin! Üst kısımdaki menüyü kullanarak ilgilendiğiniz kategorileri seçebilir ve aradığınız bilgilere kolayca ulaşabilirsiniz. </p>
      <Link
        href="/"
        title="Asrın Klima Anasayfa"
        className="inline-block rounded-lg bg-white text-blue px-8 py-2.5 text-base font-semibold hover:bg-whiteB transition-colors"
      >
        Anasayfaya Dön
      </Link>
    </div>
  );
}
