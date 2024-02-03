import { PokemonCard } from "@/components";
import { getPokemonsForPage } from "@/data-fetching/pokemon";
import getMaxBaseStat from "@/data-fetching/pokemon/getMaxBaseStat";

export default async function PokemonList({ page }: { page: number }) {
  const [pokemons, maxBaseStat] = await Promise.all([
    getPokemonsForPage(page),
    getMaxBaseStat(),
  ]);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-stretch justify-center gap-x-3 gap-y-6">
      {pokemons.map((p) => {
        return (
          <li key={p.name}>
            <PokemonCard pokemon={p} maxBaseStat={maxBaseStat} />
          </li>
        );
      })}
    </ul>
  );
}
