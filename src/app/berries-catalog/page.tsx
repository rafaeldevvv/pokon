import type { Metadata } from "next";
import { Suspense } from "react";

import { keywords } from "../shared-metadata";

import listBerriesForPage from "@/data-fetching/berries/listBerriesForPage";

import CatalogListSkeleton from "@/components/CatalogListSkeleton";
import CatalogSection from "@/components/CatalogSection";
import BerriesList from "@/components/BerriesList";

const appName = process.env.APP_NAME as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

const description = "Explore the all the berries available in Pokémon games";

export async function generateMetadata(): Promise<Metadata> {
  const { results } = await listBerriesForPage(1);
  const names = results.map((r) => r.name);

  return {
    title: "Berries Catalog",
    description: description,
    keywords: [...keywords, ...names],
    openGraph: {
      title: `Berries Catalog | ${appName}`,
      description: description,
      url: "/berries-catalog",
      siteName: appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/berries-catalog/page/1/thumbnail",
          alt: `Berries for page 1`,
        },
      ],
    },
    twitter: {
      card: "summary",
      creator: `@${creatorTwitterUsername}`,
      site: `@${creatorTwitterUsername}`,
      title: `Berries Catalog | ${appName}`,
      description: description,
      images: [
        {
          url: "/berries-catalog/page/1/thumbnail",
          alt: `Berries for page 1`,
        },
      ],
    },
  };
}

export default async function BerriesCatalog() {
  const list = await listBerriesForPage(1);

  return (
    <CatalogSection label={`Berries List for page 1`}>
      <Suspense
        fallback={<CatalogListSkeleton numOfItems={list.results.length} />}
      >
        <BerriesList list={list} />
      </Suspense>
    </CatalogSection>
  );
}
