import { notFound } from "next/navigation";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";

export default function SubCategoryPage({
  params,
}: {
  params: { serviceTitle: string; subCategory: string };
}) {
  const { serviceTitle, subCategory } = params;

  const service = hizmetlerimiz.find((s) => s.slug === serviceTitle);

  if (!service || !service.subCategories) {
    return notFound();
  }

  const subCategoryItem = service.subCategories.find(
    (sub) => sub.slug === subCategory
  );

  if (!subCategoryItem) {
    return notFound();
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{subCategoryItem.title}</h2>
    </div>
  );
}

export async function generateStaticParams() {
  return hizmetlerimiz.flatMap((service) =>
    (service.subCategories || []).map((sub) => ({
      serviceTitle: service.slug,
      subCategory: sub.slug,
    }))
  );
}
