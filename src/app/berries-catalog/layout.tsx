import CatalogHeader from "@/components/CatalogHeader";
import { CatalogPagination } from "@/components";
import { getNumberOfPages } from "@/utils/common";
import { getCount } from "@/data-fetching/berries";

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const total = await getCount();
  const pages = getNumberOfPages(total);

  return (
    <div className="py-header">
      <article>
        <CatalogHeader
          title="Berries Catalog"
          searchFormLabel="Search for berries"
          searchFormPlaceholder="Search for berries"
        />
        {children}
      </article>
      <CatalogPagination totalPages={pages} baseUrl="/berries-catalog/" />
    </div>
  );
}
