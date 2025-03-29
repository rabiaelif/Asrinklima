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
  return (<div className="max-w-6xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-bold no-before text-blue-800 mb-4">{service.title} Hizmetleri</h1>

    {service.subCategories && (
      <div className="space-y-4 lg:hidden flex">
        <h3 className="text-xl font-semibold">Alt Kategoriler</h3>
        <ul className="space-y-2">
          {service.subCategories.map((sub) => (
            <li
              key={sub.title}
              className={`cursor-pointer p-2 rounded-lg hover:bg-gray-200`}
            >
              <a href={`#${sub.slug}`} className="text-lg text-black">
                {sub.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}

    <ServiceComponent />
  </div>
  );
}
export async function generateStaticParams() {
  return hizmetlerimiz.map((service) => ({
    serviceTitle: service.slug,
  }));
}