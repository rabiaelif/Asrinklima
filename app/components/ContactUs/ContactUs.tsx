import ContactSection from "./ContactSection";
import ImageGallery from "./ImageGallery";


const ContactUs = () => {
    return (
        <div className="py-20 lg:py-32 container mx-auto px-4 sm:px-6">

            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-0">
                <ContactSection />
                <ImageGallery />
            </div>
        </div>
    );
};

export default ContactUs;
