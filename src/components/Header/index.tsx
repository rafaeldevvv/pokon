"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-6">
      <div>
        <Link
          href="/"
          className="font-bold font-title text-5xl text-yellow-600 block drop-shadow-sm text-shadow"
        >
          Pokón
        </Link>
      </div>
      <Nav />
    </header>
  );
}

export function Nav() {
  return (
    <nav className="relative">
      <MobileNavToggle
        controls="primary-navigation"
        onClick={() => {}}
        isExpanded={false}
      >
        <FontAwesomeIcon icon={faBars} size="3x" />
      </MobileNavToggle>
      <PrimaryNavigation />
    </nav>
  );
}

export function MobileNavToggle({
  isExpanded,
  controls,
  onClick,
  children,
}: {
  isExpanded: boolean;
  controls: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const label = isExpanded ? "Close main menu" : "Open main menu";

  return (
    <button
      className={"block aspect-1 md:hidden"}
      aria-expanded={isExpanded}
      aria-controls={controls}
      aria-haspopup="menu"
      aria-label={label}
      onClick={onClick}
    >
      <span className={"sr-only"}>{label}</span>
      {children}
    </button>
  );
}

export function PrimaryNavigation() {
  const links = [
    ["Pokémon Catalog", "/pokemons"],
    ["Berries Catalog", "/berries"],
    ["Items Catalog", "/items"],
  ] as const;

  return (
    <ul
      className="flex gap-y-3 md:gap-y-0 md:gap-x-8 justify-center content-center flex-col absolute right-0 top-16 bg-white w-60 h-42 px-6 py-6 border-black border-2 text-xl md:static md:bg-transparent md:flex-row md:w-auto md:border-0 md:p-0"
      id="primary-navigation"
    >
      {links.map(([name, path]) => {
        return (
          <li key={path} className="text-right">
            <Link
              href={path}
              className="font-bold font-title hover:text-red-600 border-r-4 border-r-black block pr-4 hover:border-r-red-600 md:border-0 md:p-0"
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
