import type { PokemonWithColor } from "@/ts/types";
import { PokemonCard } from "@/components";

export default function PokemonList({
  pokemons,
}: {
  pokemons: PokemonWithColor[];
}) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-stretch justify-center gap-x-3 gap-y-6">
      {pokemons.map((p, i) => {
        return (
          <li key={p.name}>
            <PokemonCard pokemon={p} />
          </li>
        );
      })}
    </ul>
  );
}
