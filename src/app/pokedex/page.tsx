import type { Metadata } from "next";
import Image from "next/image";
import {keywords} from "../shared-metadata";

const appName = process.env.APP_NAME as string;

export const metadata: Metadata = {
  title: "Pokédex",
  description: `${appName}'s Pokédex provides detailed information about all Pokémon in the entire game series`,
  keywords: [...keywords, "pokedex", "list"],
};

export default function Pokedex() {
  return (
    <article className="py-10 grid gap-y-4 gap-x-6 md:grid-cols-2 text-center md:text-left items-center">
      <div className="space-y-4">
        <header>
          <h1 className="text-8xl font-title">Pokédex</h1>
          <p className="mx-auto md:mx-0 max-w-lg mt-2 text-xl">
            Welcome to {appName}&apos;s Pokédex!
          </p>
        </header>
        <p className="mx-auto md:mx-0 max-w-lg">
          This section has detailed information about all Pokémon creatures in
          the entire game series.
        </p>
        <p className="mx-auto md:mx-0 max-w-lg">
          In this page, you can see a list of all the Pokémon creatures. If you
          want detailed information about a Pokémon, click on it and you&apos;ll
          go to that Pokémon&apos;s specific page.
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
    </article>
  );
}
