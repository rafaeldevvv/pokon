import catalogConfig from "@/catalog-config";
import getPokemonsWithColors from "./getPokemonsWithColors";
export default async function getPokemonsForPage(page: number) {
  return await getPokemonsWithColors(
    (page - 1) * catalogConfig.itemsPerPage,
    catalogConfig.itemsPerPage
  );
}
