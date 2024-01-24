import type { Metadata } from "next";

import { keywords } from "@/app/shared-metadata";
import {
  listItemsForPage,
  getCount as getItemsCount,
} from "@/data-fetching/items";
import { CatalogListSkeleton, CatalogSection } from "@/components";
import { Suspense } from "react";
import ItemsList from "@/components/ItemsList";
import { CatalogPageParams } from "@/ts/types";
import { checkPageNumber, getNumberOfPages } from "@/utils/common";
import { notFound } from "next/navigation";

const appName = process.env.APP_NAME as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

const description = "Explore the all the items available in Pokémon games";

export async function generateMetadata({
  params,
}: {
  params: CatalogPageParams;
}): Promise<Metadata> {
  const page = Number(params.page);
  const { results } = await listItemsForPage(page);
  const names = results.map((r) => r.name);

  return {
    title: `Items Catalog Page ${page}`,
    description: description,
    keywords: [...keywords, ...names].concat(["item", "items"]),
    openGraph: {
      title: `Items Catalog Page ${page} | ${appName}`,
      description: description,
      url: "/items-catalog/page/" + page,
      siteName: appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `/items-catalog/page/${page}/thumbnail`,
          alt: `Items for the first catalog page in ${appName}`,
        },
      ],
    },
    twitter: {
      card: "summary",
      creator: `@${creatorTwitterUsername}`,
      site: `@${creatorTwitterUsername}`,
      title: `Items Catalog Page ${page} | ${appName}`,
      description: description,
      images: [
        {
          url: `/items-catalog/page/${page}/thumbnail`,
          alt: `Items for the catalog page ${page} in ${appName}`,
        },
      ],
    },
  };
}

export default async function ItemsCatalogPage({
  params,
}: {
  params: CatalogPageParams;
}) {
  const page = Number(params.page);

  const [numItems, { results }] = await Promise.all([
    getItemsCount(),
    listItemsForPage(page),
  ]);

  const numPages = getNumberOfPages(numItems);
  const invalid = checkPageNumber(page, numPages);
  if (invalid) notFound();

  return (
    <CatalogSection label={`Items List for Page ${[page]}`}>
      <Suspense fallback={<CatalogListSkeleton numOfItems={results.length} />}>
        <ItemsList page={page} />
      </Suspense>
    </CatalogSection>
  );
}
