import { NextRequest } from "next/server";
import { createImagesGrid } from "@/utils/server";
import { notFound } from "next/navigation";
import getItem from "@/data-fetching/items/getItem";
import getBerriesForPage from "@/data-fetching/berries/getBerriesForPage";

export const runtime = "edge";

const baseUrl = process.env.BASE_URL;
const defaultItemSprite = baseUrl + "/unknown-berry.png";

export async function GET(
  request: NextRequest,
  context: { params: { page: string } }
) {
  const page = Number(context.params.page);
  const berries = await getBerriesForPage(page);
  const berriesAsItems = await Promise.all(
    berries.map((b) => getItem(b.item.name))
  );

  if (berriesAsItems.length === 0) notFound();

  const sprites = berriesAsItems
    .map((p) => p.sprites.default)
    .map((s) => s || defaultItemSprite);

  return createImagesGrid(sprites);
}
