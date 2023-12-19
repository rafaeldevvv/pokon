import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}

export function Nav() {
  const links = [
    ["Pokemon Catalog", "/pokemons"],
    ["Berries", "/berries"],
    ["Items", "/items"],
  ] as const;

  return (
    <nav>
      <ul>
        {links.map(([name, path]) => {
          return (
            <li key={path}>
              <Link href={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
