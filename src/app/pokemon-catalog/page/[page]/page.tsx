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
          url: `/pokemon-catalog/page/${pageNumber}/thumbnail`, // absolute
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
          url: `/pokemon-catalog/page/${pageNumber}/thumbnail`, //absolute
          alt: "Pokemon",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: PokemonPageParams }) {
  const page = Number(params.page);

  const [numPokemons, pokemons] = await Promise.all([
    getPokemonCount(),
    getPokemonsForPage(page),
  ]);
  const numPages = getNumberOfPages(numPokemons);
  checkPageNumber(page, numPages);

  return (
    <CatalogSection label="Pokemon List">
      <PokemonList pokemons={pokemons} />
    </CatalogSection>
  );
}
