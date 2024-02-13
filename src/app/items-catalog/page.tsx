import type { Metadata } from "next";
import { Suspense } from "react";

import { keywords } from "../shared-metadata";

import listItemsForPage from "@/data-fetching/items/listItemsForPage";

import ItemsList from "@/components/ItemsList";
import CommonCardSkeleton from "@/components/Skeletons/CommonCatalogCard";
import CatalogListSkeleton from "@/components/Skeletons/CatalogList";
import CatalogSection from "@/components/CatalogSection";

const appName = process.env.APP_NAME as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

const description = "Explore the all the items available in Pokémon games";

export async function generateMetadata(): Promise<Metadata> {
  const { results } = await listItemsForPage(1);
  const names = results.map((r) => r.name);

  return {
    title: "Items Catalog",
    description: description,
    keywords: [...keywords, ...names],
    openGraph: {
      title: `Items Catalog | ${appName}`,
      description: description,
      url: "/items-catalog",
      siteName: appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/items-catalog/page/1/thumbnail",
          alt: `Items for page 1`,
        },
      ],
    },
    twitter: {
      card: "summary",
      creator: `@${creatorTwitterUsername}`,
      site: `@${creatorTwitterUsername}`,
      title: `Items Catalog | ${appName}`,
      description: description,
      images: [
        {
          url: "/items-catalog/page/1/thumbnail",
          alt: `Items for page 1`,
        },
      ],
    },
  };
}

export default async function ItemsCatalog() {
  const { results } = await listItemsForPage(1);

  return (
    <CatalogSection label={`Items List for page 1`}>
      <Suspense
        fallback={
          <CatalogListSkeleton
            numOfItems={results.length}
            CardComponent={CommonCardSkeleton}
          />
        }
      >
        <ItemsList page={1} />
      </Suspense>
    </CatalogSection>
  );
}
