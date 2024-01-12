import { Metadata } from "next";
import { CatalogSection, PokemonList } from "@/components";
import { checkPageNumber, getNumberOfPages } from "@/utils/common";
import {
  getCount as getPokemonCount,
  getPokemonsForPage,
} from "@/data-fetching/pokemon";
import { keywords } from "@/app/shared-metadata";

type PokemonPageParams = { page: string };

const appName = process.env.APP_NAME as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

export async function generateMetadata({
  params,
}: {
  params: PokemonPageParams;
}): Promise<Metadata> {
  const { page } = params;
  const pageNumber = Number(page);

  const numPokemons = await getPokemonCount();
  const numPages = getNumberOfPages(numPokemons);
  checkPageNumber(pageNumber, numPages, "/pokemon-catalog");

  const pokemons = await getPokemonsForPage(pageNumber);
  const names = pokemons.map((p) => p.name);

  return {
    title: `Pokémon Catalog Page ${pageNumber}`,
    keywords: [...names, ...keywords],
    openGraph: {
      title: `Pokémon Catalog Page ${pageNumber} | ${appName}`,
      description: "Explore Pokémon in a catalog-like page",
      url: "",
      siteName: appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "http://localhost:3000/homepage-background.png", // absolute
          alt: "Pokemon",
        },
      ],
    },
    twitter: {
      card: "summary",
      creator: `@${creatorTwitterUsername}`,
      site: `@${creatorTwitterUsername}`,
      title: `Pokémon Catalog Page ${pageNumber} | ${appName}`,
      description: "Explore Pokémon in a catalog-like page",
      images: [
        {
          url: "http://localhost:3000/homepage-background.png", //absolute
          alt: "Pokemon",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: PokemonPageParams }) {
  const page = Number(params.page);

  const numPokemons = await getPokemonCount();
  const numPages = getNumberOfPages(numPokemons);
  checkPageNumber(page, numPages, "/pokemon-catalog");

  const pokemons = await getPokemonsForPage(page);

  return (
    <CatalogSection label="Pokemon List">
      <PokemonList pokemons={pokemons} />
    </CatalogSection>
  );
}
