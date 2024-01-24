import CatalogHeader from "@/components/CatalogHeader";
import { CatalogPagination } from "@/components";
import { getNumberOfPages } from "@/utils/common";
import { getCount as getPokemonCount } from "@/data-fetching/pokemon";

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const total = await getPokemonCount();
  const pages = getNumberOfPages(total);

  return (
    <div className="py-header">
      <article>
        <CatalogHeader
          title="Pokémon Catalog"
          searchFormLabel="Search for pokemon"
          searchFormPlaceholder="Search for pokemon"
        />
        {children}
      </article>
      <CatalogPagination totalPages={pages} baseUrl="/pokemon-catalog/" />
    </div>
  );
}
