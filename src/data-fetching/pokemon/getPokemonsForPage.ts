import { PokemonWithColor } from "@/ts/types";
import catalogConfig from "@/catalog-config";
import getPokemonsWithColors from "./getPokemonsWithColors";

/**
 * Fetches pokemon with colors for a given page.
 *
 * @param page - The page
 * @returns
 */
export default async function getPokemonsForPage(
   page: number
 ): Promise<PokemonWithColor[]> {
   return await getPokemonsWithColors(
     (page - 1) * catalogConfig.itemsPerPage,
     catalogConfig.itemsPerPage
   );
 }