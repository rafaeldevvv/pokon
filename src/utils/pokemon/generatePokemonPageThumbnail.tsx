import { Pokemon } from "@/ts/types";
import { ImageResponse } from "next/og";

export default function generatePokemonPageThumbnail(pokemons: Pokemon[]) {
  const pokemonSprites = pokemons
    .map((p) => p.sprites.front_default)
    .filter((s) => s !== null) as string[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {pokemonSprites.map((ps) => (
          <img src={ps} style={{ width: 100, height: 100 }} />
        ))}
      </div>
    ),
    { width: 6 * 100, height: 6 * 100 }
  );
}
