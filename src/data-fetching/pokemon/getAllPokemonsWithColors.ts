import getPokemonsWithColors from "./getPokemonsWithColors";
import { PokemonWithColor } from "@/ts/types";

export default async function getAllPokemonsWithColors(): Promise<
  PokemonWithColor[]
> {
  const pokemons = await getPokemonsWithColors(0, 99999);
  return pokemons;
}
