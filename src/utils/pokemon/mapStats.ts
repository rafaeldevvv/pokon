import { PokemonStat, StatNames, BaseStats } from "@/ts/types";

/**
 * Maps an array of {@link PokemonStat} to a convenient object
 * whose property keys are stat names and values are the
 * corresponding {@link PokemonStat.base_stat};
 * 
 * @param stats
 * @returns 
 */
export default function mapStats(stats: PokemonStat[]) {
  const mappedStats = {} as BaseStats;
  stats.forEach((s) => {
    mappedStats[s.stat.name as StatNames] = s.base_stat;
  });

  return mappedStats;
}
