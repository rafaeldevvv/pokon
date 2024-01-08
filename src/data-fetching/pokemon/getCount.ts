import listPokemons from "./listPokemons";

/**
 * Fetches the total number of pokemon available.
 */
export default async function getCount(): Promise<number> {
   return (await listPokemons()).count;
 }