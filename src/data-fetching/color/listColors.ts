import type { NamedAPIResourceList } from "pokenode-ts";
import fetchPokeApiData from "../fetchPokeApiData";

export default function listColors(): Promise<NamedAPIResourceList> {
  return fetchPokeApiData("pokemon-color");
}
