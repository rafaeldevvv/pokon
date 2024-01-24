import listItemsForPage from "./listItemsForPage";
import getItem from "./getItem";
import { Item } from "@/ts/types";

export default async function getItemsForPage(page: number): Promise<Item[]> {
  const { results } = await listItemsForPage(page);
  const items = Promise.all(results.map((r) => getItem(r.name)));
  return items;
}
