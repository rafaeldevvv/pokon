import Image from "next/image";
import type { PokemonWithColor, PokemonStat, ShownStatNames } from "@/ts/types";
import mapStats from "@/utils/pokemon/mapStats";
import CatalogCard, { Title } from "../CatalogCard";
import ValueIndicatorBar from "../ValueIndicatorBar";

const statsIcons = {
  hp: "/icons/hp.svg",
  attack: "/icons/attack.svg",
  defense: "/icons/defense.svg",
  speed: "/icons/speed.svg",
} as const;

const pokemonMaxStatValue = 255;

export default function PokemonCard({
  pokemon,
}: {
  pokemon: PokemonWithColor;
}) {
  const sprite = pokemon.sprites.front_default;

  return (
    <CatalogCard>
      <PokemonSprite
        name={pokemon.name}
        sprite={sprite}
        color={pokemon.color}
      />
      <Title>{pokemon.name.replaceAll("-", " ")}</Title>
      <div className="px-2 py-3">
        <PokemonStats stats={pokemon.stats} />
      </div>
    </CatalogCard>
  );
}

export function PokemonSprite({
  name,
  color,
  sprite,
}: {
  name: string;
  color: string;
  sprite: null | string;
}) {
  const gradientStyles =
    sprite !== null
      ? {
          backgroundImage: `radial-gradient(closest-side circle at center, ${color}, transparent)`,
        }
      : undefined;

  const src = sprite || "/unknown-pokemon.png";

  return (
    <div className="relative z-0 py-4">
      <div
        className="absolute inset-0 opacity-30 z-[-1]"
        style={gradientStyles}
      />
      <Image
        src={src}
        alt={name}
        width="100"
        height="100"
        className="mx-auto h-[100px] image-pixelated"
      />
    </div>
  );
}

export function PokemonStats({ stats }: { stats: PokemonStat[] }) {
  const baseStats = mapStats(stats);

  const statses: ShownStatNames[] = ["hp", "attack", "defense", "speed"];

  return (
    <ul className="space-y-2">
      {statses.map((statName) => {
        const statValue = baseStats[statName];
        if (!statValue) return null;
        return (
          <li key={statName}>
            <StatIndicator statValue={statValue} name={statName} />
          </li>
        );
      })}
    </ul>
  );
}

export function StatIndicator({
  statValue,
  name,
}: {
  statValue: number;
  name: ShownStatNames;
}) {
  return (
    <div>
      <span className="sr-only">{name.replaceAll("-", " ")}:</span>
      <div className="flex gap-x-2 items-center">
        <Image src={statsIcons[name]} alt="" width="25" height="25" />
        <ValueIndicatorBar
          value={statValue}
          max={pokemonMaxStatValue}
          fgColor="bg-red-800"
          bgColor="bg-gray-300"
        />
      </div>
    </div>
  );
}
