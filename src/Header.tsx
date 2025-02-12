import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

const TransparentHeader = () => {
  return (
   
    <div className="pt-24 font-sans">
    <header className="fixed w-full top-0 backdrop-filter backdrop-blur-md p-6 bg-gray-200">
  <nav className="flex justify-center items-center max-w-7xl mx-40">
    {/* Sol kısım: Logo */}
    <div className="flex lg:flex-1 ">
      <Logo />
    </div>
    {/* Sağ kısım: Butonlar */}
    <div className="hidden  lg:flex lg:flex-1 justify-center space-x-12">
      <HeaderButton text="ANASAYFA" />
      <HeaderButton text="HAKKIMIZDA" />
      <HeaderButton text="KİRALAMA" />
      <HeaderButton text="HİZMETLER" />
      <HeaderButton text="İLETİŞİM" />
    </div>
  </nav>
</header>
    </div>
  );
};


export default TransparentHeader;
