import { NextRequest } from "next/server";
import getPokemonsForPage from "@/data-fetching/pokemon/getPokemonsForPage";
import createImagesGrid from "@/utils/server/createImagesGrid";
import { notFound } from "next/navigation";

export const runtime = "edge";

const baseUrl = process.env.BASE_URL;
const defaultPokemonSprite = baseUrl + "/unknown-pokemon.png";

export async function GET(
  request: NextRequest,
  context: { params: { page: string } }
) {
  const page = Number(context.params.page);
  const pokemons = await getPokemonsForPage(page);

  if (pokemons.length === 0) notFound();

  const sprites = pokemons
    .map((p) => p.sprites.front_default)
    .map((s) => s || defaultPokemonSprite);

  return createImagesGrid(sprites);
}
