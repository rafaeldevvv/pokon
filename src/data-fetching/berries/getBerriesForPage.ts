import listBerriesForPage from "./listBerriesForPage";
import getBerry from "./getBerry";
import { Berry } from "@/ts/types";

export default async function getBerriesForPage(
  page: number
): Promise<Berry[]> {
  const { results } = await listBerriesForPage(page);
  const berries = Promise.all(results.map((r) => getBerry(r.name)));
  return berries;
}
