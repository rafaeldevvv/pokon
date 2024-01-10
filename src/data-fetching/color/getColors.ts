import listColors from "./listColors";
import getColor from "./getColor";
import {PokemonColor} from "@/ts/types";
import "server-only";

export default function getColors(): Promise<PokemonColor[]> {
   return listColors().then(({ results }) =>
     Promise.all(results.map((r) => getColor(r.name)))
   );
 }