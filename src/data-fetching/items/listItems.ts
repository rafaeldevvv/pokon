import { NamedAPIResourceList } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";
import "server-only";

/**
 * Fetches {@link NamedAPIResourceList}.for items.
 *
 * @param offset - How many pokemon should be skipped. Defaults to 0.
 * @param limit - How many pokemon should be fetched. Defaults to 20.
 * @returns - A {@link NamedAPIResourceList} for items.
 */
export default async function listItems(
  offset?: number,
  limit?: number
): Promise<NamedAPIResourceList> {
  return fetchPokeApiData("item", { offset, limit });
}
