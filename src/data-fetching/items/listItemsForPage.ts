import config from "@/catalog-config";
import fetchPokeApiData from "../fetchPokeApiData";
import { NamedAPIResourceList } from "@/ts/types";

const { itemsPerPage } = config;

export default function listItemsForPage(
  page: number
): Promise<NamedAPIResourceList> {
  return fetchPokeApiData("item", {
    offset: (page - 1) * itemsPerPage,
    limit: itemsPerPage,
  });
}
