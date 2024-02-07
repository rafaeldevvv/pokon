import listBerries from "./listBerries";

/**
 * Fetches how many berries are available.
 */
export default async function getItemsCount(): Promise<number> {
  const list = await listBerries();
  return list.count;
}
