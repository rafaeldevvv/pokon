import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getPokemonsForPage } from "@/data-fetching/pokemon";

export const runtime = "edge";

const defaultPokemonSprite = "http://localhost:3000/unknown-pokemon.png";

export async function GET(
  request: NextRequest,
  context: { params: { page: string } }
) {
  const page = Number(context.params.page);
  const pokemons = await getPokemonsForPage(page);

  const sprites = pokemons
    .map((p) => p.sprites.front_default)
    .map((s) => s || defaultPokemonSprite);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "hsl(0 100% 95%)",
        }}
      >
        {sprites.map((s) => (
          <img src={s} style={{ width: "100px", height: "100px" }} key={s} />
        ))}
      </div>
    ),
    { width: 5 * 100, height: 5 * 100 }
  );
}
