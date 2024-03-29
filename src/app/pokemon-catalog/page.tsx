import { Suspense } from "react";
import type { Metadata } from "next";

import PokemonList from "@/components/PokemonList";
import CatalogSection from "@/components/CatalogSection";
import CommonCardSkeleton from "@/components/Skeletons/CommonCatalogCard";
import CatalogListSkeleton from "@/components/Skeletons/CatalogList";

import listPokemonsForPage from "@/data-fetching/pokemon/listPokemonsForPage";

import { keywords as sharedKeywords } from "../shared-metadata";

const appName = process.env.APP_NAME as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

export async function generateMetadata(): Promise<Metadata> {
  const { results } = await listPokemonsForPage(1);
  const names = results.map((p) => p.name);

  return {
    title: "Pokémon Catalog",
    description: "Explore Pokémon in a catalog-like page",
    keywords: [...names, ...sharedKeywords],
    openGraph: {
      title: `Pokémon Catalog | ${appName}`,
      description: "Explore Pokémon in a catalog-like page",
      url: "/pokemon-catalog",
      siteName: appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/pokemon-catalog/page/1/thumbnail",
          alt: "Pokémon for page 1",
        },
      ],
    },
    twitter: {
      card: "summary",
      creator: `@${creatorTwitterUsername}`,
      site: `@${creatorTwitterUsername}`,
      title: `Pokémon Catalog | ${appName}`,
      description: "Explore Pokémon in a catalog-like page",
      images: [
        {
          url: "/pokemon-catalog/page/1/thumbnail",
          alt: "Pokémon for page 1",
        },
      ],
    },
  };
}

export default async function PokemonCatalog() {
  const { results } = await listPokemonsForPage(1);
  return (
    <CatalogSection label="Pokemon list">
      <Suspense
        fallback={
          <CatalogListSkeleton
            numOfItems={results.length}
            CardComponent={CommonCardSkeleton}
          />
        }
      >
        <PokemonList page={1} />
      </Suspense>
    </CatalogSection>
  );
}
