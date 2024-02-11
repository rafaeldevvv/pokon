import { NextRequest } from "next/server";
import getItemsForPage from "@/data-fetching/items/getItemsForPage";
import createImagesGrid from "@/utils/server/createImagesGrid";
import { notFound } from "next/navigation";

export const runtime = "edge";

const baseUrl = process.env.BASE_URL;
const defaultItemSprite = baseUrl + "/unknown-item.png";

export async function GET(
  request: NextRequest,
  context: { params: { page: string } }
) {
  const page = Number(context.params.page);
  const items = await getItemsForPage(page);

  if (items.length === 0) notFound();

  const sprites = items
    .map((p) => p.sprites.default)
    .map((s) => s || defaultItemSprite);

  return createImagesGrid(sprites);
}
