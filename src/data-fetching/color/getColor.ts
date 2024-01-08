import type { PokemonColor } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";

export default function getColor(idOrName: string | number): Promise<PokemonColor> {
  return fetchPokeApiData(`pokemon-color/${idOrName}`);
}
