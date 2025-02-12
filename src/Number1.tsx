
const Number1 = () => {
    return (
        <div className="flex font-sans max-w-7xl mx-auto flex-col lg:flex-row justify-around items-center py-16 px-8 space-x-8">
            <div className="flex flex-col lg:w-1/2 items-start">
                {/* giriş yazısı */}
                <p className="text-start font-sans text-gray-600 text-wrap text-lg lg:m-12 lg:ml-0 m-8 ml-0">
                    EV, OFİS VE FABRİKA KLİMALARININ TAMİR, BAKIM, ONARIM VE KİRALAMA HİZMETLERİNİ SUNMAK İÇİN İSTANBUL GENELİNDEKİ TÜM SEMTLERE HİZMET VERMEKTEYİZ.
                </p>
                {/* button kısmı */}
                <div className="flex justify-between w-full lg:w-auto space-x-8 lg:space-x-16 mt-2 h-[50px]">
                <button className="text-gray-200 text-xl bg-gray-500 w-full lg:w-[253px]">
                        DETAYLI İNCELE
                    </button>
                    <button className="text-xl border-2 border-gray-500 w-full lg:w-[253px]">
                        ŞİMDİ ARA
                    </button>
                </div>
            </div>
            {/* resim kısmı */}
            <div className="flex items-center mt-4 lg:mt-0">
                <p className="w-[533px] h-[368px] bg-gray-300"></p>
            </div>
        </div>
    );
}

export default Number1;
