import { CatalogSection, PokemonList } from "@/components";
import { checkPageNumber, getNumberOfPages } from "@/utils/common";
import { getCount as getPokemonCount, getPokemonsForPage } from "@/utils/pokemon";

export default async function Page({ params }: { params: { page: string } }) {
  const numPokemons = await getPokemonCount();
  const numPages = getNumberOfPages(numPokemons);

  const page = Number(params.page);
  checkPageNumber(page, numPages, "/pokemon-catalog");

  const pokemons = await getPokemonsForPage(page);

  return (
   <CatalogSection label="Pokemon List">
      <PokemonList pokemons={pokemons} />
   </CatalogSection>
  )
}
