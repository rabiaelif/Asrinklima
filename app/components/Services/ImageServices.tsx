import Image from "next/image"

const ImageServices = () => {
    return (
        <div>
            <div className="relative w-full h-[300px]">
                <Image
                    src="/images/ImageServices.webp"
                    alt="chiller"
                    fill
                    priority={true}
                    className="object-cover"
                    unoptimized
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

            </div>
            <div
                className="bottom-0 left-0 w-full"
                style={{
                    background: "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
                    backdropFilter: "blur(0px)",
                    boxShadow: "0 0 10px 50px rgba(255, 255, 255, 1)",
                }}
            ></div>
        </div>
    )
}
export default ImageServices