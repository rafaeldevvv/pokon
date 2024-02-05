import { PokemonCard } from "@/components";
import { getPokemonsForPage } from "@/data-fetching/pokemon";

export default async function PokemonList({ page }: { page: number }) {
  const pokemons = await getPokemonsForPage(page);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-stretch justify-center gap-x-3 gap-y-6 auto-rows-[max-content_1fr_max-content]">
      {pokemons.map((p) => {
        return (
          <li
            key={p.name}
            className="grid grid-rows-subgrid row-span-3"
            style={{
              display: "grid",
              gridTemplateRows: "subgrid",
              gridRow: "span 3",
            }}
          >
            <PokemonCard pokemon={p} />
          </li>
        );
      })}
    </ul>
  );
}
