import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container md:flex md:justify-between py-4 md:gap-x-8">
        <p className="font-body max-w-xs mb-4 md:mb-0">
          Pokémon are registered trademarks of Nintendo and Game Freak.
        </p>
        <p className="font-body">
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
