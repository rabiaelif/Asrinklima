import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import ContactUsButton from "./ContactUsButton";

const ContactSection = () => {
    return (
        <div className="mx-auto container ">
            <div className="flex items-center">
                <ChatBubbleLeftRightIcon className="h-9 w-9" />
                <h1 className="text-3xl font-semibold ml-2">Bize Ulaşın</h1>
            </div>
            <p className="mt-4 text-gray-600">
                Klima ve soğutma çözümleriniz için profesyonel destek sunuyoruz!
                Montaj, bakım ve tamir hizmetlerimizle ihtiyaçlarınıza en uygun
                çözümleri sağlamak için buradayız. Daha fazla bilgi veya size özel
                bir teklif için bizimle iletişime geçin.
            </p>
            <div className="mt-6">
                <ContactUsButton />
            </div>
        </div>
    );
};

export default ContactSection;