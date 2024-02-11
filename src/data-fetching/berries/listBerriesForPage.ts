import config from "@/catalog-config";
import fetchPokeApiData from "../fetchPokeApiData";
import { NamedAPIResourceList } from "@/ts/types";

const { itemsPerPage } = config;

export default function listBerriesForPage(
  page: number
): Promise<NamedAPIResourceList> {
  return fetchPokeApiData("berry", {
    offset: (page - 1) * itemsPerPage,
    limit: itemsPerPage,
  });
}
