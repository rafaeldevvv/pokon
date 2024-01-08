import type { Pokemon, PokemonColor } from "@/ts/types";

export default function findPokemonColor(
  pokemon: Pokemon,
  colors: PokemonColor[]
) {
  return colors.find((c) =>
    c.pokemon_species.some((s) => s.name === pokemon.species.name)
  )!.name;
}
