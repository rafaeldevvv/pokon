import PokemonCard from "@/components/PokemonCard";
import getPokemonsForPage from "@/data-fetching/pokemon/getPokemonsForPage";
import CatalogList, { ListItem } from "../CatalogList";

export default async function PokemonList({ page }: { page: number }) {
  const pokemons = await getPokemonsForPage(page);

  return (
    <CatalogList>
      {pokemons.map((p) => {
        return (
          <ListItem key={p.name}>
            <PokemonCard pokemon={p} />
          </ListItem>
        );
      })}
    </CatalogList>
  );
}
