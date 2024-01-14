import type { Metadata } from "next";
import { getPokemonsForPage } from "@/data-fetching/pokemon";
import { CatalogSection, PokemonList } from "@/components";
import { keywords } from "../shared-metadata";

const appName = process.env.APP_NAME as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

export async function generateMetadata(): Promise<Metadata> {
  const pokemons = await getPokemonsForPage(1);
  const names = pokemons.map((p) => p.name);

  return {
    title: "Pokémon Catalog",
    description: "Explore Pokémon in a catalog-like page",
    keywords: [...names, ...keywords],
    openGraph: {
      title: `Pokémon Catalog | ${appName}`,
      description: "Explore Pokémon in a catalog-like page",
      url: "",
      siteName: appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/pokemon-catalog/page/1/thumbnail", // absolute
          alt: "Pokemon",
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
          url: "/pokemon-catalog/page/1/thumbnail", //absolute
          alt: "Pokemon",
        },
      ],
    },
  };
}

export default async function PokemonCatalog() {
  const pokemons = await getPokemonsForPage(1);

  return (
    <CatalogSection label="Pokemon list">
      <PokemonList pokemons={pokemons} />
    </CatalogSection>
  );
}
