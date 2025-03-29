import { FaBolt, FaExclamationTriangle, FaTools, FaShieldAlt, FaEye, FaUserCog } from 'react-icons/fa';

const ElektronikKartArizalari = () => {
    return (
        <div className=" mx-auto my-12 mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaBolt className="text-blue-600 text-2xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-black/85">
                    Elektronik Kart Arızaları
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <FaExclamationTriangle className="text-blue-500" />
                        </div>
                        <h3 className="font-semibold text-black/85"> Elektriksel Dalgalanmalar ve Aşırı Voltaj</h3>
                    </div>
                    <p className="text-black/80  mb-2">
                        <span className="font-medium">Olası Neden:</span> Ani elektrik kesintileri veya voltaj dalgalanmaları, elektronik kartın aşırı ısınmasına veya yanmasına neden olabilir.
                    </p>
                    <p className="text-black/80 ">
                        <span className="font-medium">Tavsiye:</span> Klima sistemini, voltaj dalgalanmalarına karşı koruyan cihazlarla kullanmak ve elektrik tesisatının düzgün çalıştığından emin olmak gereklidir.
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-500">
                    <div className="flex items-center mb-3">
                        <div className="bg-red-100 p-2 rounded-full mr-3">
                            <FaTools className="text-red-500" />
                        </div>
                        <h3 className="font-semibold text-black/85">Kısa Devreler ve Elektrik Bağlantı Hataları</h3>
                    </div>
                    <p className="text-black/80  mb-2">
                        <span className="font-medium">Olası Neden:</span> Yanlış bağlantılar veya kabloların temas etmesi, kartta kısa devreye yol açabilir.
                    </p>
                    <p className="text-black/80 ">
                        <span className="font-medium">Tavsiye:</span> Kablolama bağlantılarını düzenli olarak kontrol etmek ve uzman kişiler tarafından inceletmek gereklidir.
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                    <div className="flex items-center mb-3">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                            <FaExclamationTriangle className="text-orange-500" />
                        </div>
                        <h3 className="font-semibold text-black/85">Aşırı Isınma</h3>
                    </div>
                    <p className="text-black/80  mb-2">
                        <span className="font-medium">Olası Neden:</span> Klima sisteminin sürekli yüksek sıcaklıklarda çalışması, kartın aşırı ısınmasına ve arızalanmasına neden olabilir.
                    </p>
                    <p className="text-black/80 ">
                        <span className="font-medium">Tavsiye:</span> Klima cihazını uygun sıcaklık koşullarında kullanmak ve yeterli havalandırmayı sağlamak gereklidir.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                            <FaEye className="text-purple-600" />
                        </div>
                        <h3 className="font-bold text-black/85">Belirtiler</h3>
                    </div>
                    <ul className="space-y-3 pl-1">
                        <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                </svg>
                            </span>
                            <span className="text-black/80">Klimanın hiç tepki vermemesi veya çalışmaması.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                </svg>
                            </span>
                            <span className="text-black/80">Gösterge ışıklarının yanıp sönmesi veya hata kodlarının görünmesi.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                </svg>
                            </span>
                            <span className="text-black/80">Klimanın beklenmedik şekilde açılıp kapanması.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                            <FaUserCog className="text-green-600" />
                        </div>
                        <h3 className="font-bold text-black/85">Tavsiye Önerileri</h3>
                    </div>
                    <div className="space-y-4 pl-1">
                        <div className="flex items-start">
                            <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black/80">Görsel Muayene</h4>
                                <p className="text-black/80 ">Elektrik bağlantılarını kontrol etmek ve kart üzerinde yanık izleri veya hasar olup olmadığını incelemek.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black/80">Profesyonel Destek</h4>
                                <p className="text-black/80 ">Kart arızası şüphesi durumunda, uzman teknisyenlerden yardım almak ve gerekirse kartı onartmak veya değiştirmek gereklidir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                    <div className="bg-yellow-200 p-2 rounded-full mr-3">
                        <FaShieldAlt className="text-yellow-700" />
                    </div>
                    <h3 className="font-bold text-yellow-700 text-lg">Önleyici Tedbirler</h3>
                </div>

                <div className="space-y-4 grid sm:grid-cols-2 ">
                    {[
                        {
                            title: "Düzenli bakım yaptırın",
                            description: "Klima filtrelerini ve sistemini düzenli olarak temizlemek veya değiştirmek, kartın performansını olumlu etkiler."
                        },
                        {
                            title: "Bağlantı Kontrolü",
                            description: "Kartın bağlantılarını düzenli olarak kontrol etmek, gevşemiş veya zarar görmüş bağlantıları önler."
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 pl-1">
                            <span className="bg-yellow-300 text-yellow-700 rounded-full flex-shrink-0 p-1 mr-3 mt-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <div className='space-y-2'>
                                <h4 className="font-semibold text-black/85">{item.title}</h4>
                                <p className="text-black/80 font-medium">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <FaExclamationTriangle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                        <h3 className=" font-medium text-red-800">Dikkat!</h3>
                        <div className="mt-2  text-red-700">
                            <p>
                                Elektronik kart arızaları teknik bilgi gerektirir. Kendi başınıza müdahale etmeyiniz, Bizimle iletişime geçebilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ElektronikKartArizalari;