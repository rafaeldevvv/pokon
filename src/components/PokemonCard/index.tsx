import Image from "next/image";
import type { PokemonWithColor, PokemonStat } from "@/ts/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

export default function PokemonCard({ pokemon }: { pokemon: PokemonWithColor }) {
  const sprite = pokemon.sprites.front_default;

  return (
    <div className="border border-solid border-black h-full">
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
    </div>
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
  const img =
    sprite === null ? (
      <div className="h-[100px] flex place-items-center text-center">
        <FontAwesomeIcon icon={faBan} size="5x" className="block mx-auto" />
        <span className="sr-only">Sorry, there's no image for {name}</span>
      </div>
    ) : (
      <Image
        src={sprite}
        alt={name}
        width="100"
        height="100"
        className="mx-auto"
      />
    );

  const gradientStyles =
    sprite !== null
      ? {
          backgroundImage: `radial-gradient(closest-side circle at center, ${color}, transparent)`,
        }
      : undefined;

  return (
    <div className="relative z-0 py-4">
      <div
        className="absolute inset-0 opacity-50 z-[-1]"
        style={gradientStyles}
      />
      {img}
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
            {name.toUpperCase().replaceAll("-", " ")}
            {' '}
            {baseState}
          </li>
        );
      })}
    </ul>
  );
}
