import { notFound } from "next/navigation";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";

export default async function SubCategoryPage({
  params,
}: {
  params: { serviceTitle: string; subCategory: string };
}) {
  const { serviceTitle, subCategory } = await params;

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
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{subCategoryItem.title}</h2>
      </div>

      <div className="space-y-4 lg:hidden flex">
        <h3 className="text-xl font-semibold">Alt Kategoriler</h3>
        <ul className="space-y-2">
          {service.subCategories.map((sub) => (
            <li
              key={sub.title}
              className={`cursor-pointer p-2 rounded-lg hover:bg-gray-200 ${
                sub.slug === subCategory ? "bg-red" : ""
              }`}
            >
              <a href={`#${sub.slug}`} className="text-lg text-black">
                {sub.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
