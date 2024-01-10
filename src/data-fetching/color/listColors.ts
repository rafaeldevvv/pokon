import type { NamedAPIResourceList } from "pokenode-ts";
import fetchPokeApiData from "../fetchPokeApiData";
import "server-only";

export default function listColors(): Promise<NamedAPIResourceList> {
  return fetchPokeApiData("pokemon-color");
}
