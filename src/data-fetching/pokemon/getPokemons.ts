import type { Pokemon } from "@/ts/types";
import listPokemons from "./listPokemons";
import getPokemon from "./getPokemon";

/**
 * Fetches a list of {@link Pokemon} given an offset and a limit.
 * 
 * @param offset 
 * @param limit 
 * @returns - A promise that resolves to an array of {@link Pokemon} objects.
 */
export default async function getPokemons(
   offset: number,
   limit: number
 ): Promise<Pokemon[]> {
   const { results } = await listPokemons(offset, limit);
   const pokemons = await Promise.all(results.map((r) => getPokemon(r.name)));
   return pokemons;
 }