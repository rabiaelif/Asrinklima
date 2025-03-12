import { notFound } from "next/navigation";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";

export default async function ServiceDetail({
  params,
}: {
  params: { serviceTitle: string };
}) {
  const { serviceTitle } = await params;

  const service = hizmetlerimiz.find(
    (s) => s.slug === serviceTitle
  );

  if (!service) {
    return notFound();
  }

  const ServiceComponent = service.component;
  return <ServiceComponent />;
}

export async function generateStaticParams() {
  return hizmetlerimiz.map((service) => ({
    serviceTitle: service.slug,
  }));
}