import { Pokemon } from "@/ts/types";
export default function getTypeNames(pok: Pokemon) {
  const types = pok.types.map((t) => t.type.name);
  return types;
}
