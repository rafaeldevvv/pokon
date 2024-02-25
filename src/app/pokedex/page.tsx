import type { Metadata } from "next";
import Image from "next/image";
import { keywords } from "../shared-metadata";
import getAllPokemonsWithColors from "@/data-fetching/pokemon/getAllPokemonsWithColors";
import getPokemonCount from "@/data-fetching/pokemon/getCount";
import SecondaryPokemonCard from "@/components/PokemonCard/Secondary";

const appName = process.env.APP_NAME as string;

export const metadata: Metadata = {
  title: "Pokédex",
  description: `${appName}'s Pokédex provides detailed information about all Pokémon in the entire game series`,
  keywords: [...keywords, "pokedex", "list"],
};

export default function Pokedex() {
  return (
    <article className="py-10">
      <div className="grid gap-y-4 gap-x-6 md:grid-cols-2 text-center md:text-left items-center">
        <div className="space-y-4">
          <header>
            <h1 className="text-8xl font-title">Pokédex</h1>
            <p className="mx-auto md:mx-0 max-w-lg mt-2 text-xl">
              Welcome to {appName}&apos;s Pokédex!
            </p>
          </header>
          <p className="mx-auto md:mx-0 max-w-lg">
            This section of the website has detailed information about all Pokémon creatures in
            the entire game series.
          </p>
          <p className="mx-auto md:mx-0 max-w-lg">
            In this page, you can see a list of all the Pokémon creatures. If
            you want detailed information about a Pokémon, click on it and
            you&apos;ll go to that Pokémon&apos;s specific page.
          </p>
        </div>
        <div>
          <Image
            src="/amazed-pikachu-2-reduced.jpeg"
            alt="Amazed pikachu staring at a pokedex"
            className="w-full mx-auto md:mx-0 max-w-sm md:max-w-none"
            width="300"
            height={300}
          />
        </div>
      </div>

      <PokemonCreaturesSection />
    </article>
  );
}

export async function PokemonCreaturesSection() {
  const total = await getPokemonCount();

  return (
    <section className="mt-16" aria-labelledby="pokemon-creatures">
      <h2
        className="text-6xl font-title leading-[3rem] mb-2"
        id="pokemon-creatures"
      >
        Pokémon Creatures
      </h2>
      <p>We have information about {total} pokemon creatures. Here&apos;s the list:</p>
      <div></div>
      <div className="py-6">
        <PokemonFullList />
      </div>
    </section>
  )
}

export async function PokemonFullList() {
  const pokemons = await getAllPokemonsWithColors();

  return (
    <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {pokemons.map((p) => {
        return (
          <li key={p.name}>
            <SecondaryPokemonCard pokemon={p} />
          </li>
        );
      })}
    </ul>
  );
}
