import getPokemons from "./getPokemons";

/**
 * @returns A Promise that resolves to the highest available stat value, 
 * regardless of what kind of stat it is.
 */
export default async function getMaxBaseStat() {
  const pokemons = await getPokemons(0, 99999);
  const baseStatses = pokemons
    .map((p) => p.stats.map((s) => s.base_stat))
    .flat();
  const maxBaseStat = Math.max(...baseStatses);
  return maxBaseStat;
}
