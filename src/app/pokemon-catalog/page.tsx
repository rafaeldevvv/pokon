import { getPokemonsForPage } from "@/data-fetching/pokemon";
import { CatalogSection, PokemonList } from "@/components";

export default async function PokemonCatalog() {
  const pokemons = await getPokemonsForPage(1);

  return (
    <CatalogSection label="Pokemon list">
      <PokemonList pokemons={pokemons} />
    </CatalogSection>
  );
}
