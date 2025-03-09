import { ChatBubbleLeftRightIcon} from "@heroicons/react/24/outline";
import ContactUsButton from "./ContactUsButton";
import Image from "next/image";



const ContactUs = () => {
    return (
        <div className="mx-auto container px-4 sm:px-6 py-16 md:py-24 ">
            <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-0 justify-center max-w-7xl mx-auto">
                <div className="">
                    <div className="">
                        <div className="flex items-center">
                            <ChatBubbleLeftRightIcon className="size-9 " />
                            <h1 className="no-before">Bize Ulaşın</h1>
                        </div>
                        <p className="not-padding max-w-lg">Klima ve soğutma çözümleriniz için profesyonel destek sunuyoruz! Montaj, bakım ve tamir hizmetlerimizle ihtiyaçlarınıza en uygun çözümleri sağlamak için buradayız. Daha fazla bilgi veya size özel bir teklif için bizimle iletişime geçin.</p>
                        <div>
                        </div>
                    </div>
                    <ContactUsButton />
                </div>
                <div className="flex justify-center lg:justify-end xl:justify-center ">
            <div className="flex justify-start lg:justify-center overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-2 lg:grid-rows-2 max-lg:gap-2">
                <Image
                    src="/öncesi1.jpg"
                    alt="öncesi1.jpg"
                    width={242}
                    height={183}
                    className="sm:w-[242px] w-[200px] h-[183px] object-cover rounded-tl-3xl border-3 lg:border-blue max-lg:rounded-2xl"
                />
                <Image
                    src="/sonrası1.jpg"
                    alt="sonrası1.jpg"
                    width={242}
                    height={183}
                    className="sm:w-[242px] h-[183px] object-cover rounded-tr-3xl border-y-3 border-r-3 lg:border-blue max-lg:rounded-2xl"
                />
                <Image
                    src="/öncesi2.jpg"
                    alt="öncesi2.jpg"
                    width={242}
                    height={183}
                    className="sm:w-[242px] h-[183px] object-cover rounded-bl-3xl border-x-3 border-b-3 lg:border-blue max-lg:rounded-2xl"
                />
                <Image
                    src="/sonrası2.jpg"
                    alt="sonrası2.jpg"
                    width={242}
                    height={183}
                    className="sm:w-[242px] h-[183px] object-cover rounded-br-3xl border-b-3 border-r-3 lg:border-blue max-lg:rounded-2xl"
                />
            </div>
        </div>

            </div>
        </div>
    )
}
export default ContactUs;