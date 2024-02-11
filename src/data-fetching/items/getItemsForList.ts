import type { Item, NamedAPIResourceList } from "@/ts/types";
import getItem from "./getItem";

export default async function getItemsForList(
  l: NamedAPIResourceList
): Promise<Item[]> {
  const { results } = l;
  const items = Promise.all(results.map((r) => getItem(r.name)));
  return items;
}
