import { PokemonStat, StatNames, BaseStats } from "@/ts/types";

/**
 * Maps an array of {@link PokemonStat} to a 
 * convenient {@link BaseStats} object.
 * 
 * @param stats - An array of {@link PokemonStat}
 */
export default function mapStats(stats: PokemonStat[]) {
  const mappedStats = {} as BaseStats;
  stats.forEach((s) => {
    mappedStats[s.stat.name as StatNames] = s.base_stat;
  });

  return mappedStats;
}
