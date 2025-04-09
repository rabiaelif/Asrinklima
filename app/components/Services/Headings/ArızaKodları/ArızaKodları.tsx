
import React from "react";
export default function ArızaKodları() {
    return (
        <div>
            <div className="max-w-6xl max-lg:pt-6 px-3 space-y-8 mb-12">
                <h1 className="text-3xl -ml-3 md:text-4xl font-bold no-before text-blue-800 mb-4">
                    Arıza Kodları
                </h1>
                <div>
                    <h2 className="text-black/90 max-w-4xl">
                        Arızalar hakkında telefon desteği almak istiyorsanız 7/24 bize ulaşabilirsiniz.
                    </h2>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="-mt-3 mb-4">
                            Bu kodlar <strong>genel klima arıza kodlarıdır</strong> ve çoğu marka benzer hata kodları kullanır.
                        </p>
                        <h3 className="text-lg font-semibold mb-1">E1 – Düşük veya Yüksek Voltaj Hatası</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Elektrik dalgalanmaları veya düşük voltaj.</p>
                        <p><strong>Çözüm:</strong> Voltajı kontrol edin, klima regülatör ile kullanılmalı.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">E2 – Sensör Hatası</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Oda sıcaklık sensörü arızalı veya bağlantısı kopmuş.</p>
                        <p><strong>Çözüm:</strong> Sensörü kontrol edin, kablo bağlantılarını inceleyin.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">E3 – Düşük Gaz Basıncı</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Klima gazı eksik veya borularda kaçak var.</p>
                        <p><strong>Çözüm:</strong> Servis çağırarak gaz basıncını ölçtürün, kaçak varsa onarım yaptırın.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">E4 – Dış Ünite Aşırı Isınma Hatası</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Dış ünite fanı çalışmıyor, hava akışı engellenmiş.</p>
                        <p><strong>Çözüm:</strong> Dış ünitenin hava almasını sağlayın, fan motorunu kontrol ettirin.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">E5 – Kompresör Aşırı Yüklenme Hatası</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Kompresör çok fazla enerji tüketiyor veya motor aşırı ısınmış.</p>
                        <p><strong>Çözüm:</strong> Klimayı kapatıp bir süre bekleyin, eğer devam ederse teknik servis çağırın.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">E6 – İç Ünite ve Dış Ünite Haberleşme Hatası</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Kablolarda bağlantı kopması veya anakart arızası.</p>
                        <p><strong>Çözüm:</strong> Bağlantıları kontrol edin, sorunun devam etmesi durumunda servis çağırın.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">F0 – Düşük Soğutucu Gaz Seviyesi</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Klima gazı eksik veya boru hattında kaçak var.</p>
                        <p><strong>Çözüm:</strong> Servise başvurup gaz dolumu yaptırın, kaçak varsa tamir ettirin.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">F1 – İç Ünite Sensör Hatası</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> İç ünitenin sıcaklık sensörü arızalı.</p>
                        <p><strong>Çözüm:</strong> Sensör bağlantılarını kontrol edin veya değiştirin.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">F2 – Dış Ünite Sensör Hatası</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Dış ünitenin sıcaklık sensörü bozulmuş olabilir.</p>
                        <p><strong>Çözüm:</strong> Sensör kablolarını ve bağlantılarını kontrol ettirin.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">P1 – Drenaj Sistemi Tıkalı veya Su Kaçırıyor</h3>
                        <p className="mb-1"><strong>Nedeni:</strong> Klimanın su tahliye hortumu tıkalı veya drenaj pompası çalışmıyor.</p>
                        <p><strong>Çözüm:</strong> Hortumu temizleyin, suyun düzgün tahliye olup olmadığını kontrol edin.</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-blue-800">Mitsubishi Electric Arıza Kodları</h3>
                    <div className="space-y-1 mt-2">
                        <h3 className="text-lg">P1 – Emme sensörü hatası</h3>
                        <h3 className="text-lg ">E6 E7 – İç/dış ünite iletişim hatası</h3>
                        <h3 className="text-lg ">P4 – Tahliye sensörü hatası</h3>
                        <h3 className="text-lg ">P5 – Tahliye pompası hatası</h3>
                        <h3 className="text-lg ">PA – Zorlanmış kompresör hatası</h3>
                        <h3 className="text-lg ">P6 – Donma/Aşırı Isınma emniyeti çalışması</h3>
                        <h3 className="text-lg ">EEE – İç ve dış üniteler arasında iletişim hatası</h3>
                        <h3 className="text-lg ">E4 – Uzaktan kumanda sinyali alma hatası</h3>
                        <h3 className="text-lg ">E0 E3 – Uzaktan kumanda iletim hatası</h3>
                        <h3 className="text-lg ">E1 E2 – Uzaktan kumanda kontrol kartı hatası</h3>
                        <h3 className="text-lg ">E9 – İç/dış ünite iletişim hatası (İletim hatası) (Dış ünite)</h3>
                        <h3 className="text-lg ">U3, U4 – Dış ünite termistörlerinin açık/kısa devreli olması</h3>
                        <h3 className="text-lg ">Uf – Kompresör aşırı akım kesintisi (Kompresör kilitlendiğinde)</h3>
                        <h3 className="text-lg ">U2 – Anormal yüksek deşarj sıcaklığı/49C çalışıldı/yetersiz soğutucu</h3>
                        <h3 className="text-lg ">U1 Ud – Anormal yüksek basınç (63H çalışıldı)/Aşırı ısınma emniyet çalışması</h3>
                        <h3 className="text-lg ">U5 – Isı emicinin anormal sıcaklığı</h3>
                        <h3 className="text-lg ">U6 – Kompresör aşırı akım kesintisi/Güç modülünün anormal durumu</h3>
                        <h3 className="text-lg ">U7 – Düşük deşarj sıcaklığı nedeniyle aşırı ısınma anormalliği</h3>
                        <h3 className="text-lg ">U8 – Açık devre ve aşırı ısınmış termistör</h3>
                        <h3 className="text-lg ">U9 – Düşük sıcaklık, düşük akü voltajı/kapalı geçiş hatası</h3>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Mitsubishi Heavy Industries Arıza Kodları</h2>
                    <div className="space-y-1">
                        <h3 className="text-lg ">E0 – Elektrik Beslemesi Sorunu</h3>
                        <h3 className="text-lg ">E1 – İç Fan Motoru Arızası</h3>
                        <h3 className="text-lg ">E2 – Dış Fan Motoru Arızası</h3>
                        <h3 className="text-lg ">E3 – Soğutma Sistemi Sorunu</h3>
                        <h3 className="text-lg ">E4 – Sıcaklık Sensörü Sorunu</h3>
                        <h3 className="text-lg ">E5 – İç ve Dış Ünite İletişim Hatası</h3>
                        <h3 className="text-lg ">F0 – Düşük Gaz Seviyesi</h3>
                        <h3 className="text-lg ">F1 – İç Ünite Sensörü Hatası</h3>

                    </div>
                    {/* Daikin */}
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Daikin Klima Arıza Kodları</h2>
                    <div className="space-y-1">
                        <h3 className="text-lg ">U7 – Kompresör faz sırası hatası</h3>
                        <h3 className="text-lg ">A3 – Drenaj suyu seviyesi hatası</h3>
                        <h3 className="text-lg ">U8 – İç ve dış ünite arasında iletişim hatası</h3>
                        <h3 className="text-lg ">U9 – İç ünite ile dış ünite arasında iletişim hatası</h3>
                        <h3 className="text-lg ">L5 – Kompresör kilitlenmesi veya aşırı akım koruması</h3>
                    </div>
                    {/* Toshiba */}
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Toshiba Klima Arıza Kodları</h2>
                    <div className="space-y-1">
                        <h3 className="text-lg ">E01 – İç ünite ile uzaktan kumanda arasında iletişim hatası</h3>
                        <h3 className="text-lg ">E02 – İç ünite ile dış ünite arasında iletişim hatası</h3>
                        <h3 className="text-lg ">E03 – Dış ünite EEPROM hatası</h3>
                        <h3 className="text-lg ">E04 – Dış ünite fan motoru hatası</h3>
                        <h3 className="text-lg ">E06 – Kompresör aşırı ısınma koruması</h3>
                    </div>
                    {/* Viessmann */}
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Viessmann Klima Arıza Kodları</h2>
                    <div className="space-y-1">
                        <h3 className="text-lg ">E1 – Yüksek basınç koruması devreye girmiş</h3>
                        <h3 className="text-lg ">E2 – Defrost koruması devrede</h3>
                        <h3 className="text-lg ">E3 – Düşük basınç koruması ya da gaz kaçağı koruması devrede</h3>
                        <h3 className="text-lg ">E4 – Yüksek kompresör çıkış sıcaklığı koruması devrede</h3>
                        <h3 className="text-lg ">E5 – Aşırı akım koruması sorunu</h3>
                        <h3 className="text-lg ">E6 – İletişim problemi</h3>
                    </div>
                    {/* Beko */}
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Beko Klima Arıza Kodları</h2>
                    <div className="space-y-1">
                        <h3 className="text-lg ">E1 – İç ünite sıcaklık sensörü hatası</h3>
                        <h3 className="text-lg ">E2 – Evaporatör sensör hatası</h3>
                        <h3 className="text-lg ">E3 – Kompresör çalışmasında hata</h3>
                        <h3 className="text-lg ">E5 – İç ve dış ünite arasında iletişim hatası</h3>
                        <h3 className="text-lg ">1E – Dış ünite sıcaklık sensörü hatası</h3>
                        <h3 className="text-lg ">2E – Kondenser sıcaklık sensörü hatası</h3>
                    </div>
                    {/* Midea */}
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Midea Klima Arıza Kodları</h2>
                    <div className="space-y-1">
                        <h3 className="text-lg ">E13 – Kompresör faz sırası hatası</h3>
                        <h3 className="text-lg ">E14 – Kompresör doğru olmayan faz hatası</h3>
                        <h3 className="text-lg ">P4 – Kompresör koruma (iç ünite sıcaklık sorunu)</h3>
                    </div>
                </div>
            </div>
            <div className="mb-6 mx-4 p-6 bg-gradient-to-br bg-red rounded-xl shadow-2xl text-whiteB">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        Klima Arızaları İçin Uzman Desteği
                    </h3>
                    <p className="text-lg mb-6 !text-whiteB">
                        Karşılaştığınız arıza kodlarıyla ilgili teknik destek almak için 7/24 bizimle iletişime geçebilirsiniz.
                        <span className="block mt-2">
                            Size özel çözümlerimizle, sistemlerinizin performansını artırmak
                            ve enerji tasarrufu sağlamak için buradayız!                        </span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="tel:+905388225549"
                            className="border-2 border-white hover:bg-white hover:text-red font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            <span className="flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                0538 822 55 49
                            </span>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}