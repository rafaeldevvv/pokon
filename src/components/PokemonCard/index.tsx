import Image from "next/image";
import type { PokemonWithColor, PokemonStat } from "@/ts/types";
import CatalogCard from "../CatalogCard";

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
      <div className="border-y border-solid border-black py-2 px-2">
        <h3 className="capitalize text-center leading-none font-title text-2xl">
          {pokemon.name.replaceAll("-", " ")}
        </h3>
      </div>
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
        className="absolute inset-0 opacity-50 z-[-1]"
        style={gradientStyles}
      />
      <Image
        src={src}
        alt={name}
        width="100"
        height="100"
        className="mx-auto h-[100px]"
      />
    </div>
  );
}

export function PokemonStats({ stats }: { stats: PokemonStat[] }) {
  return (
    <ul>
      {stats.map((stat) => {
        const { name } = stat.stat;
        const baseState = stat.base_stat;
        return (
          <li key={stat.stat.name}>
            {name.toUpperCase().replaceAll("-", " ")} {baseState}
          </li>
        );
      })}
    </ul>
  );
}
