import type { PokemonWithColor } from "@/ts/types";
import getPokemons from "./getPokemons";
import getColors from "../color/getColors";
import { findPokemonColor } from "@/utils/pokemon";
import "server-only";

export default async function getPokemonsWithColors(
  offset: number,
  limit: number
): Promise<PokemonWithColor[]> {
  const [pokemons, colors] = await Promise.all([
    getPokemons(offset, limit),
    getColors(),
  ]);
  const pokemonsWithColors = pokemons.map((p) => ({
    ...p,
    color: findPokemonColor(p, colors)!,
  }));

  return pokemonsWithColors;
}
