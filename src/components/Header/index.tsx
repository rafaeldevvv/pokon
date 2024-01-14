"use client";

import { useState } from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useSelectedLayoutSegments } from "next/navigation";
config.autoAddCss = false;

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-[9999] border-b border-solid border-black">
      <div className="container flex justify-between items-center mx-auto h-header">
        <div>
          <Link
            href="/"
            className="font-bold font-title text-5xl text-yellow-600 block drop-shadow-sm text-shadow"
          >
            Pokón
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);

  let icon: React.ReactNode;
  if (isExpanded) {
    icon = <FontAwesomeIcon icon={faX} size="3x" />;
  } else {
    icon = <FontAwesomeIcon icon={faBars} size="3x" />;
  }

  return (
    <nav className="relative">
      <MobileNavToggle
        controls="primary-navigation"
        onToggle={setIsExpanded}
        isExpanded={isExpanded}
      >
        {icon}
      </MobileNavToggle>
      <PrimaryNavigation isExpanded={isExpanded} />
    </nav>
  );
}

export function MobileNavToggle({
  isExpanded,
  controls,
  onToggle,
  children,
}: {
  isExpanded: boolean;
  controls: string;
  onToggle: (isExpanded: boolean) => void;
  children: React.ReactNode;
}) {
  const label = isExpanded ? "Close main menu" : "Open main menu";

  return (
    <button
      className="block aspect-1 md:hidden"
      aria-expanded={isExpanded}
      aria-controls={controls}
      aria-haspopup="menu"
      aria-label={label}
      onClick={() => onToggle(!isExpanded)}
    >
      <span className={"sr-only"}>{label}</span>
      {children}
    </button>
  );
}

export function PrimaryNavigation({ isExpanded }: { isExpanded: boolean }) {
  const segments = useSelectedLayoutSegments();
  const activeSegment = segments[0];

  const links = [
    ["Pokémon Catalog", "/pokemon-catalog"],
    ["Berries Catalog", "/berries-catalog"],
    ["Items Catalog", "/items-catalog"],
  ] as const;

  let primaryNavClassName =
    "w-60 h-42 flex gap-y-3 md:gap-y-0 md:gap-x-8 justify-center content-center flex-col absolute right-0 top-16 bg-white px-6 py-6 border-black border-2 text-xl md:static md:bg-transparent md:flex-row md:w-auto md:border-0 md:p-0 transition-size duration-500 ease-in-out origin-top-right";
  if (!isExpanded) {
    /* the scaling can only happen on mobile, 
    if it happens on a desktop, there's no 
    way for the user to get it showing up */
    primaryNavClassName += " max-[48em]:scale-0";
  }

  return (
    <ul className={primaryNavClassName} id="primary-navigation">
      {links.map(([name, path]) => {
        let activeStyles = "";
        if ("/" + activeSegment === path)
          activeStyles +=
            "relative text-red-600 after:absolute after:top-full after:inset-x-2 after:h-0.5 after:bg-red-600";
        return (
          <li key={path} className="text-right">
            <Link
              href={path}
              className={`font-bold font-title hover:text-red-600 border-r-4 border-r-black block pr-4 hover:border-r-red-600 md:border-0 md:p-0 ${activeStyles}`}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
