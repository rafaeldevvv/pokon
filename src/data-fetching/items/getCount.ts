import listItems from "./listItems";

/**
 * Fetches how many items are available.
 */
export default async function getItemsCount(): Promise<number> {
  const list = await listItems();
  return list.count;
}
