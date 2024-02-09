import { Berry, NamedAPIResourceList } from "@/ts/types";
import { getBerry } from ".";

export default async function getBerriesForList(
  l: NamedAPIResourceList
): Promise<Berry[]> {
  const { results } = l;
  const berries = Promise.all(results.map((r) => getBerry(r.name)));
  return berries;
}
