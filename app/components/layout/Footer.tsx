import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-blue text-gray-300 py-10">
      <div className="h-auto px-6 mx-auto container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="col-span-1">
            <h2 className="mb-2 text-yellow">Hızlı Bağlantılar</h2>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-[#ffffff]">Anasayfa</a></li>
              <li><a href="/#hizmetlerimiz" className="hover:text-[#ffffff]">Hizmetlerimiz</a></li>
              <li><a href="/hizmetlerimiz/klima-kiralama" className="hover:text-[#ffffff]">Kiralama</a></li>
              <li><a href="/#hakkımızda" className="hover:text-[#ffffff]">Hakkımızda</a></li>
              <li><a href="/#iletişim" className="hover:text-[#ffffff]">İletişim</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="mb-2 text-yellow">Hizmetler</h2>
            <ul className="space-y-1 ">
              <li><a href="/hizmetlerimiz/split-klima-bakim-onarim-ve-yedek-parca" className="hover:text-[#ffffff]">Split Klima Bakım Onarım ve Yedek Parça</a></li>
              <li><a href="/hizmetlerimiz/chiller-revizyon-ve-onarim" className="hover:text-[#ffffff]">Chiller Revizyon ve Onarım</a></li>
              <li><a href="/hizmetlerimiz/thermotron-bakim-ve-onarim" className="hover:text-[#ffffff]">Thermotron Bakım ve Onarım</a></li>
              <li><a href="/hizmetlerimiz/rooftop-klima-ariza-bakim-ve-onarim" className="hover:text-[#ffffff]">Rooftop Klima Arıza, Bakım ve Onarım</a></li>
              <li><a href="/hizmetlerimiz/vrf-klima-sistemleri" className="hover:text-[#ffffff]">VRF Klima Sistemleri</a></li>
              <li><a href="/hizmetlerimiz/klima-kiralama" className="hover:text-[#ffffff]">Klima Kiralama</a></li>
              <li><a href="/hizmetlerimiz/klima-santrali-bakim-ve-onarim" className="hover:text-[#ffffff]">Klima Santrali Bakım ve Onarım</a></li>
              <li><a href="/hizmetlerimiz/pano-klima-bakim-ve-onarim" className="hover:text-[#ffffff]">Pano Klima Bakım ve Onarım</a></li>
              <li><a href="/hizmetlerimiz/iklimlendirme-hizmetleri" className="hover:text-[#ffffff]">İklimlendirme Hizmetleri</a></li>
              <li><a href="/hizmetlerimiz/hastane-hijyenik-klima-bakimi-ve-onarimi" className="hover:text-[#ffffff]">Hastane Hijyenik Klima Bakımı ve Onarımı</a></li>
              <li><a href="/hizmetlerimiz/dx-sogutma-sistemleri-bakim-ve-onarim" className="hover:text-[#ffffff]">DX Soğutma Sistemleri Bakım ve Onarım</a></li>
              <li><a href="/hizmetlerimiz/hassas-klima-bakim-onarim-ve-yedek-parca" className="hover:text-[#ffffff]">Hassas Klima Bakım, Onarım ve Yedek Parça</a></li>
              <li><a href="/hizmetlerimiz/ariza-kodlari" className="hover:text-[#ffffff]">Arıza Kodları</a></li>
            </ul>
          </div>

          <div className="col-span-1 gap-8 lg:gap-20 2xl:gap-72 flex flex-col xl:flex-row items-start xl:justify-center">
            <div className="mb-4 xl:mb-0">
              <h2 className="mb-2 text-yellow text-sm sm:text-base">İletişim</h2>
              <div className="flex items-center gap-2 mb-2 text-xs sm:text-sm">
                <PhoneIcon className="h-5 w-5 text-whiteB" />
                <a href="tel:05388225559" className="hover:underline hover:text-[#ffffff]">0538 822 55 59</a>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <EnvelopeIcon className="h-5 w-5 text-whiteB" />
                <a href="mailto:info@asrinklima.com" className="hover:underline hover:text-[#ffffff]">info@asrinklima.com</a>
              </div>
            </div>

          </div>
          <div className="col-span-1 flex gap-3 items-start lg:justify-center">
            <div className="p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <a href="https://www.facebook.com/hakansahin84" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-yellow">
                <FaFacebookF size={18} />
              </a>
            </div>
            <div className="p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <a href="https://www.instagram.com/asrlnklima/" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-yellow">
                <FaInstagram size={18} />
              </a>
            </div>
            <div className="p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <a href="https://wa.me/05388225559" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-yellow">
                <IoLogoWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-gray-300 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <div className="text-start">© 2026 ASRINKLİMA. Tüm Hakları Saklıdır.</div>
          <a href="mailto:rabiaelf@gmail.com" className="hover:underline sm:text-right mr-20">
            Tasarım ve Geliştirme:{" "}
            <span className="font-semibold text-lg text-red">elf</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
