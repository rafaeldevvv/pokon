import CatalogHeader from "@/components/CatalogHeader";
import {CatalogPagination} from "@/components";
import { getNumberOfPages } from "@/utils/common";
import { getCount } from "@/data-fetching/items";

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
          title="Items Catalog"
          searchFormLabel="Search for items"
          searchFormPlaceholder="Search for items"
        />
        {children}
      </article>
      <CatalogPagination totalPages={pages} baseUrl="/items-catalog/" />
    </div>
  );
}
