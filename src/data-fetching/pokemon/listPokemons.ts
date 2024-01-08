import type { NamedAPIResourceList } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";

/**
 * Fetches a pokemon {@link NamedAPIResourceList}.
 *
 * @param offset - How many pokemon should be skipped. Defaults to 0
 * @param limit - How many pokemon should be fetched.
 * @returns - A pokemon {@link NamedAPIResourceList}
 */
export default function listPokemons(
   offset?: number,
   limit?: number
 ): Promise<NamedAPIResourceList> {
   return fetchPokeApiData("pokemon", { limit, offset });
 }