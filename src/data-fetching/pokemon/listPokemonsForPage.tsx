import listPokemons from "./listPokemons";
import config from "@/catalog-config";
const { itemsPerPage } = config;
import "server-only";

export default function listPokemonForPage(page: number) {
  return listPokemons((page - 1) * itemsPerPage, itemsPerPage);
}
