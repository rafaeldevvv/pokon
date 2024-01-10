import type { PokemonColor } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";
import "server-only";

export default function getColor(idOrName: string | number): Promise<PokemonColor> {
  return fetchPokeApiData(`pokemon-color/${idOrName}`);
}
