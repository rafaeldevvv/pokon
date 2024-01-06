import CatalogHeader from "@/components/CatalogHeader";
import PokemonPagination from "@/components/PokemonPagination";
import { getNumberOfPages } from "@/utils/common";
import { getCount } from "@/utils/pokemon";

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
          title="Pokémon Catalog"
          searchFormLabel="Search for pokemon"
          searchFormPlaceholder="Search for pokemon"
        />
        {children}
      </article>
      <PokemonPagination totalPages={pages} />
    </div>
  );
}
