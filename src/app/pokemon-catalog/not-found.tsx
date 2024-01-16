import { NotFoundTitle } from "@/components";
import { getCount } from "@/data-fetching/pokemon";
import { getNumberOfPages } from "@/utils/common";
import { PokemonCatalogNotFoundForm } from "@/components";

export default async function PageNotFound() {
  const pokemonsTotal = await getCount();
  const pages = getNumberOfPages(pokemonsTotal);

  return (
    <div className="max-w-lg text-center px-4 mx-auto my-16">
      <NotFoundTitle />
      <p className="mb-4">
        The page you're looking for is not available. Which page would you like
        to see?
      </p>
      <PokemonCatalogNotFoundForm numOfPages={pages} />
    </div>
  );
}
