import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
    return (
        <div className="bg-blue text-gray-300 py-10">
            <div className="grid grid-cols-6 h-auto px-6 mx-auto container gap-6">
                <div className="col-span-2">
                    <h2 className="mb-2 text-yellow">Hızlı Bağlantılar</h2>
                    <ul className="space-y-1">
                        <li><a href="/" className="hover:text-white">Anasayfa</a></li>
                        <li><a href="/hizmetlerimiz" className="hover:text-white">Hizmetlerimiz</a></li>
                        <li><a href="/kiralama" className="hover:text-white">Kiralama</a></li>
                        <li><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a></li>
                        <li><a href="/iletisim" className="hover:text-white">İletişim</a></li>
                    </ul>
                </div>

                <div className="col-span-2">
                    <h2 className="mb-2 text-yellow">Hizmetler</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">Split Klima Bakım Onarım ve Yedek Parça</a></li>
                        <li><a href="#" className="hover:text-white">Chiller Revizyon ve Onarım</a></li>
                        <li><a href="#" className="hover:text-white">Rooftop Klima Arıza, Bakım ve Onarım</a></li>
                        <li><a href="#" className="hover:text-white">VRF Klima Sistemleri</a></li>
                        <li><a href="#" className="hover:text-white">Klima Kiralama</a></li>
                        <li><a href="#" className="hover:text-white">Klima Santrali Bakım ve Onarım</a></li>
                        <li><a href="#" className="hover:text-white">İklimlendirme Hizmetleri</a></li>
                        <li><a href="#" className="hover:text-white">Hastane Hijyenik Klima Bakımı ve Onarımı</a></li>
                        <li><a href="#" className="hover:text-white">DX Soğutma Sistemleri Bakım ve Onarım</a></li>
                        <li><a href="#" className="hover:text-white">Hassas Klima Bakım ve Onarım ve Yedek Parça</a></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h2 className="mb-2 text-yellow">İletişim</h2>
                    <div className="flex items-center gap-3 mb-2">
                        <PhoneIcon className="h-5 w-5 text-white" />
                        <a href="tel:+5388225559" className="hover:underline hover:text-white">+538 822 5559</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <EnvelopeIcon className="h-5 w-5 text-white" />
                        <a href="mailto:info.aspar@gmail.com" className="hover:underline hover:text-white">info.aspar@gmail.com</a>
                    </div>
                </div>


                <div className="col-span-1">
                    <h2 className="mb-2 text-yellow">Sosyal Medya</h2>
                    <div className="flex gap-4">
                        <div className="p-2 bg-white rounded-full">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-yellow">
                                <FaFacebookF size={20} />
                            </a>
                        </div>
                        <div className="p-2 bg-white rounded-full">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-yellow">
                            <FaInstagram size={20} />
                        </a>
                        </div>
                        <div className="p-2 bg-white rounded-full">
                        <a href="https://wa.me/5388225559" target="_blank" rel="noopener noreferrer" className=" text-blue hover:text-yellow">
                            <IoLogoWhatsapp
                            size={20} />
                        </a>
                        </div>
                    </div>
                </div>
                <div className="bottom-0 col-span-2 text-sm text-gray-300">© 2025 ASRINKLİMA. Tüm Hakları Saklıdır.</div>
            </div>
        </div>
    );
};

export default Footer;
