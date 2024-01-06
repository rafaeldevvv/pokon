import Image from "next/image";
import type { PokemonWithColor } from "@/ts/types";

export default function PokemonItem({
  pokemon,
}: {
  pokemon: PokemonWithColor;
}) {
  const sprite = pokemon.sprites.front_default;
  return (
    <div className="border border-solid border-black h-full">
      <div className="relative z-0 py-4">
        <div
          className="absolute inset-0 opacity-50 z-[-1]"
          style={{
            backgroundImage: `radial-gradient(closest-side circle at center, ${pokemon.color}, transparent)`,
          }}
        />
        {sprite && (
          <Image
            src={sprite}
            alt={pokemon.name}
            width="100"
            height="100"
            className="mx-auto"
          />
        )}
      </div>
      <div className="border-t border-solid border-black py-2 px-2">
        <h3 className="capitalize text-lg text-center leading-none">{pokemon.name.replaceAll("-", " ")}</h3>
      </div>
    </div>
  );
}
