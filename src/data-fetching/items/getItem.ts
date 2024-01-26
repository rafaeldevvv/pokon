import type { Item } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";

/**
 * Fetches an item by id or name.
 *
 * @param idOrName - The id or name of the item.
 * @returns - A promise that resolves to an {@link Item}
 */
export default function getItem(idOrName: string | number): Promise<Item> {
  return fetchPokeApiData(`item/${idOrName}`);
}
