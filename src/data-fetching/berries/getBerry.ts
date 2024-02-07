import type { Berry } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";

/**
 * Fetches a berry by id or name.
 *
 * @param idOrName - The id or name of the berry.
 * @returns - A promise that resolves to a {@link Berry}.
 */
export default function getItem(idOrName: string | number): Promise<Berry> {
  return fetchPokeApiData(`item/${idOrName}`);
}
