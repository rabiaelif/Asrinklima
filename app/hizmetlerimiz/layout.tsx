import { hizmetlerimiz } from "@/data/hizmetlerimiz";
import Image from "next/image";
import Link from "next/link";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <div className="relative w-full h-[361px]">
                <Image
                    src="/images/Chiller-sogutma-1 (1) (1).png"
                    alt="chiller"
                    fill
                    className="absolute object-cover inset-0 z-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

            </div>
            <div
                className="bottom-0 left-0 w-full h-[10px] z-10"
                style={{
                    background: "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
                    backdropFilter: "blur(0px)",
                    boxShadow: "0 0 10px 50px rgba(255, 255, 255, 1)",
                }}
            ></div>
            <div className="flex">
                <aside className="w-64 z-20 bg-gray-100 p-4">
                    {hizmetlerimiz.map((service) => (
                        <Link key={service.slug} href={`/hizmetlerimiz/${service.slug}`}>
                            <div>
                                <h2>{service.title}</h2>
                            </div>
                        </Link>
                    ))}
                </aside>
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
}