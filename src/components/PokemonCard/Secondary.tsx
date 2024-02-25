import { PokemonWithColor } from "@/ts/types";
import Sprite from "../Sprite";
import getTypeNames from "@/utils/pokemon/getTypeNames";
import Link from "next/link";

const colors = {
  white: "bg-gray-100 border-gray-300 text-black",
  black: "bg-black border-gray-900 text-white",
  yellow: "bg-yellow-200 border-yellow-500 text-black",
  blue: "bg-sky-200 border-blue-400 text-black",
  brown: "bg-orange-900 border-orange-700 text-white",
  red: "bg-red-300 border-red-600 text-black",
  gray: "bg-gray-300 border-gray-600 text-black",
  green: "bg-emerald-300 border-emerald-600 text-black",
  pink: "bg-pink-400 border-pink-700 text-black",
  purple: "bg-purple-400 border-purple-700 text-black",
};

export default function SecondaryPokemonCard({
  pokemon,
}: {
  pokemon: PokemonWithColor;
}) {
  const { name, order, color, sprites } = pokemon;
  const colorClasses = colors[color];
  const types = getTypeNames(pokemon);

  return (
    <article
      className={`border-2 ${colorClasses} p-2 flex items-center gap-x-2 h-full`}
      id={`pokemon-${name}-${order}`}
    >
      <div>
        <Sprite
          src={sprites.front_default}
          defaultSrc="/unknown-pokemon.png"
          alt={name}
        />
      </div>
      <div>
        <h3 className="capitalize text-lg md:text-md">
          <Link href={`/pokedex/${name}`} className="leading-3 hover:underline">
            {name.replaceAll("-", " ")}
          </Link>
        </h3>
        <p>{types.join(" | ")}</p>
      </div>
    </article>
  );
}
