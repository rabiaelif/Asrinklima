import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";

const Footer = () => {
  return (
    <div className="bg-blue text-gray-300 py-10">
      <div className="h-auto px-6 mx-auto container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="col-span-1">
            <h2 className="text-yellow sm:text-base mb-2">Hızlı Bağlantılar</h2>
            <ul className="space-y-1">
              <li><a href="/" title="Asrın Klima Anasayfa" className="hover:text-[#ffffff]">Anasayfa</a></li>
              <li><a href="/#hizmetlerimiz" title="Sunduğumuz Isıtma, Soğutma ve Havalandırma Hizmetleri" className="hover:text-[#ffffff]">Hizmetlerimiz</a></li>
              <li><a href="/hizmetlerimiz/klima-kiralama" title="Klima Kiralama Hizmetleri" className="hover:text-[#ffffff]">Kiralama</a></li>
              <li><a href="/#hakkimizda" title="Asrın Klima Hakkımızda" className="hover:text-[#ffffff]">Hakkımızda</a></li>
              <li><a href="/#iletisim" title="Bize Ulaşın - İletişim Bilgileri" className="hover:text-[#ffffff]">İletişim</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-yellow sm:text-base mb-2">Hizmetler</h2>
            <ul className="space-y-1 ">
              {hizmetlerimiz.map((service) => (
                <li key={service.slug}>
                  <a href={`/hizmetlerimiz/${service.slug}`} title={service.title} className="hover:text-[#ffffff]">{service.title}</a>
                  {service.subCategories && service.subCategories.length > 0 && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {service.subCategories.map((sub) => (
                        <li key={sub.slug}>
                          <a href={`/hizmetlerimiz/${service.slug}/${sub.slug}`} title={sub.title} className="text-xs text-gray-400 hover:text-[#ffffff]">{sub.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 gap-8 lg:gap-20 2xl:gap-72 flex flex-col xl:flex-row items-start xl:justify-center">
            <div className="mb-4 xl:mb-0">
              <h2 className="text-yellow sm:text-base mb-2">İletişim</h2>
              <div className="flex items-center gap-2 mb-2 text-xs sm:text-sm">
                <PhoneIcon className="h-5 w-5 text-whiteB" />
                <a href="tel:05388225559" title="Bizi Arayın: 0538 822 55 59" className="hover:underline hover:text-[#ffffff]">0538 822 55 59</a>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <EnvelopeIcon className="h-5 w-5 text-whiteB" />
                <a href="mailto:info@asrinklima.com" title="Bize E-posta Gönderin" className="hover:underline hover:text-[#ffffff]">info@asrinklima.com</a>
              </div>
            </div>

          </div>
          <div className="col-span-1 flex gap-3 items-start lg:justify-center">
            <div className="p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <a href="https://www.facebook.com/hakansahin84" target="_blank" rel="nofollow noopener noreferrer" title="Asrın Klima Facebook Sayfası" className="text-blue hover:text-yellow">
                <FaFacebookF size={18} />
              </a>
            </div>
            <div className="p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <a href="https://www.instagram.com/asrlnklima/" target="_blank" rel="nofollow noopener noreferrer" title="Asrın Klima Instagram Sayfası" className="text-blue hover:text-yellow">
                <FaInstagram size={18} />
              </a>
            </div>
            <div className="p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <a href="https://wa.me/05388225559" target="_blank" rel="nofollow noopener noreferrer" title="WhatsApp ile Bize Ulaşın" className="text-blue hover:text-yellow">
                <IoLogoWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-gray-300 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <div className="text-start">© 2026 ASRINKLİMA. Tüm Hakları Saklıdır.</div>
          <a href="mailto:rabiaelf@gmail.com" title="Web Sitesi Tasarım ve Geliştirme İletişimi" className="hover:underline sm:text-right mr-20">
            Tasarım ve Geliştirme:{" "}
            <span className="font-semibold text-lg text-red">elf</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
