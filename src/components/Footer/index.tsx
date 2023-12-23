import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black">
      <div className="container md:flex md:justify-between py-8 md:gap-x-8">
        <div className="mb-4 md:mb-0">
          <p className="max-w-xs mb-6">
            Pokémon are registered trademarks of{" "}
            <Link
              href="https://www.nintendo.com/us/"
              className="text-amber-600 underline hover:no-underline"
            >
              Nintendo
            </Link>{" "}
            and{" "}
            <Link
              className="text-amber-600 underline hover:no-underline"
              href="https://www.gamefreak.co.jp/"
            >
              Game Freak
            </Link>
            .
          </p>
          <p className="max-w-xs">
            Coded by{" "}
            <Link
              href="https://rafaeldevvv.github.io/portfolio"
              target="_blank"
              className="text-amber-600 underline hover:no-underline"
            >
              Rafael Maia
            </Link>
            .
          </p>
        </div>
        <p>
          Powered by{" "}
          <Link
            href="https://pokeapi.co/"
            target="_blank"
            className="text-amber-600 underline hover:no-underline"
          >
            PokéAPI
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
