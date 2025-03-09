import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const ContactUsButton = () => {
    return (
        <div>
            <div className="grid min-[600px]:grid-cols-2 grid-cols-1 gap-4 xl:gap-8  justify-start sm:pt-6">

                <div className="border-2 hover:border-red relative overflow-hidden border-[#D9D9D9] rounded-xl xl:p-6 lg:p-4 p-6 flex items-center">
                    <div className="flex items-center xl:gap-4 lg:gap-2 gap-4">
                        <div className="bg-red p-3 rounded-xl">
                            <EnvelopeIcon className="h-6 w-6 text-white flex items-center justify-center" />
                        </div>
                        <div className="lg:max-xl:w-[120px] overflow-hidden">
                            <h3 className="font-semibold">E-posta</h3>
                            <a
                                href="mailto:info.aspar@gmail.com"
                                className="hover:underline text-red truncate block w-full"
                            >
                                info.aspar@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-2 border-[#D9D9D9] hover:border-red rounded-xl xl:p-6 lg:p-4 p-6 flex items-center">
                    <div className="flex items-center xl:gap-4 lg:gap-2 gap-4">
                        <div className="bg-red p-3 rounded-xl" >
                            <PhoneIcon className="h-6 w-6 text-white flex items-center justify-center" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Telefon</h3>
                            <a href="tel:+5380610334" className="hover:underline text-red">+5388225559</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default ContactUsButton;
