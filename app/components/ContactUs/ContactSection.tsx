import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import ContactUsButton from "./ContactUsButton";

const ContactSection = () => {
    return (
        <div className="mx-auto container translate-x-[0px]">
            <div className="flex items-center lg:pb-4 pb-2">
                <ChatBubbleLeftRightIcon className="h-9 w-9" />
                <h2 className="section-heading text-3xl no-before font-semibold ml-2">Bize Ulaşın</h2>
            </div>
            <p className="leading-tight text-base lg:text-lg text-black my-4 lg:pb-4">
                <span>Klima ve soğutma çözümleriniz için profesyonel destek sunuyoruz!</span>
                <br />
                <br />
                <span>Montaj, bakım ve tamir hizmetlerimizle ihtiyaçlarınıza en uygun çözümleri sağlamak için buradayız.</span>
                <br />
                <span>Daha fazla bilgi veya size özel bir teklif için bizimle iletişime geçin.</span>
            </p>

            <div className="">
                <ContactUsButton />
            </div>
        </div>
    );
};

export default ContactSection;