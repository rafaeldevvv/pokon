import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { keywords } from "@/app/shared-metadata";

import BerryCardSkeleton from "@/components/Skeletons/BerryCard";
import CatalogListSkeleton from "@/components/Skeletons/CatalogList";
import CatalogSection from "@/components/CatalogSection";
import BerriesList from "@/components/BerriesList";

import listBerriesForPage from "@/data-fetching/berries/listBerriesForPage";
import checkPageNumber from "@/utils/common/checkPageNumber";
import getNumberOfPages from "@/utils/common/getNumberOfPages";

import { CatalogPageParams } from "@/ts/types";

const appName = process.env.APP_NAME as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

const description = "Explore the all the berries available in Pokémon games";

export async function generateMetadata({
  params,
}: {
  params: CatalogPageParams;
}): Promise<Metadata> {
  const page = Number(params.page);
  const { results } = await listBerriesForPage(page);
  const names = results.map((r) => r.name);

  return {
    title: `Berries Catalog Page ${page}`,
    description: description,
    keywords: [...keywords, ...names, "item", "items"],
    openGraph: {
      title: `Berries Catalog Page ${page} | ${appName}`,
      description: description,
      url: `/berries-catalog/page/${page}`,
      siteName: appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `/berries-catalog/page/${page}/thumbnail`,
          alt: `Berries for page ${page}`,
        },
      ],
    },
    twitter: {
      card: "summary",
      creator: `@${creatorTwitterUsername}`,
      site: `@${creatorTwitterUsername}`,
      title: `Berries Catalog Page ${page} | ${appName}`,
      description: description,
      images: [
        {
          url: `/berries-catalog/page/${page}/thumbnail`,
          alt: `Berries for page ${page}`,
        },
      ],
    },
  };
}

export default async function BerriesCatalogPage({
  params,
}: {
  params: CatalogPageParams;
}) {
  const page = Number(params.page);

  const list = await listBerriesForPage(page);
  const { results, count } = list;

  const numPages = getNumberOfPages(count);
  const invalid = checkPageNumber(page, numPages);
  if (invalid) notFound();

  return (
    <CatalogSection label={`Berries List for page 1`}>
      <Suspense
        fallback={
          <CatalogListSkeleton
            numOfItems={results.length}
            CardComponent={BerryCardSkeleton}
          />
        }
      >
        <BerriesList list={list} />
      </Suspense>
    </CatalogSection>
  );
}
