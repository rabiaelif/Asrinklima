export default function NotFoundPage() {
  return (
    <div className="text-center w-full flex-col space-y-4 sm:space-y-6 px-4 bg-black flex justify-center h-screen items-center">
      <h2 className="sm:text-3xl text-2xl font-semibold text-red-600">404 - Sayfa Bulunamadı</h2>
      <h3 className="text-white">Üzgünüz, Aradığınız Sayfa Bulunamadı
      </h3>
      <p className="!text-white">
        Girmeye çalıştığınız sayfanın adresi bulunamadı. Bu durum, sayfanın adresinin değişmiş veya kaldırılmış olmasından kaynaklanıyor olabilir.

        Ancak endişelenmeyin! Üst kısımdaki menüyü kullanarak ilgilendiğiniz kategorileri seçebilir ve aradığınız bilgilere kolayca ulaşabilirsiniz. </p>
    </div>
  );
}
