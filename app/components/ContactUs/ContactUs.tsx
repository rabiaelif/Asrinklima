import ContactSection from "./ContactSection";
import ImageGallery from "./ImageGallery";


const ContactUs = () => {
    return (
        <section id="iletişim" className="py-20 lg:py-28 container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 xl:px-4 lg:gap-12 max-w-7xl mx-auto items-center lg:grid-cols-2 gap-12 xl:gap-0">
                <ContactSection />
                <ImageGallery />
            </div>
        </section>
    );
};

export default ContactUs;
