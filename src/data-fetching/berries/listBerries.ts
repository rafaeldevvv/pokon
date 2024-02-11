import { NamedAPIResourceList } from "@/ts/types";
import fetchPokeApiData from "../fetchPokeApiData";
import "server-only";

/**
 * Fetches {@link NamedAPIResourceList}.for berries.
 *
 * @param offset - How many berries should be skipped. Defaults to 0.
 * @param limit - How many berries at most should be fetched. Defaults to 20.
 * @returns - A {@link NamedAPIResourceList} for berries.
 */
export default async function listBerries(
  offset?: number,
  limit?: number
): Promise<NamedAPIResourceList> {
  return fetchPokeApiData("berry", { offset, limit });
}
