import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="font-body">
        Pokémon are registered trademarks of Nintendo and Game Freak.
      </p>
      <p className="font-body">
        Powered by{" "}
        <Link href="https://pokeapi.co/" target="_blank" className="text-amber-600 underline hover:no-underline">
          PokéAPI
        </Link>.
      </p>
    </footer>
  );
}
