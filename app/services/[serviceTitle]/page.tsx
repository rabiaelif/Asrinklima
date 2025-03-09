import { notFound } from "next/navigation";
import { services } from "@/data/services";

interface Service {
  title: string;
  img: string;
}

export default async function ServiceDetail({ params }: { params: { serviceTitle: string } }) {
  const serviceDetails = services.find(
    (service) => service.title.toLowerCase().replace(/\s+/g, "-") === params.serviceTitle
  );
if (!serviceDetails) {
  return notFound();

}


  return (
    <div>
      <h1>{serviceDetails.title}</h1>
      <img src={serviceDetails.img} alt={serviceDetails.title} />
      <p>Details about {serviceDetails.title}...</p>
    </div>
  );
}
export async function generateStaticParams() {
    return services.map((service) => ({
      serviceTitle: service.title.toLowerCase().replace(/\s+/g, "-"),
    }));
  }
