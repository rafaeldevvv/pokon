import type { Pokemon } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";
import "server-only";

/**
 * Fetches a pokemon by its name or id.
 *
 * @param idOrName - The id or name of the pokemon.
 * @returns - A promise that resolves to a {@link Pokemon} object.
 */
export default function getPokemon(idOrName: string | number): Promise<Pokemon> {
   return fetchPokeApiData(`pokemon/${idOrName}`);
 }
 