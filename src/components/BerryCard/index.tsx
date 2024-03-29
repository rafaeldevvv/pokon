import CatalogCard, { Title, Sprite } from "../CatalogCard";
import type { Berry, Item, BerryFirmness, BerryFlavor } from "@/ts/types";

const firmnessStyles = {
  "very-soft": "bg-lime-300 text-black",
  soft: "bg-lime-500 text-black",
  hard: "bg-yellow-400 text-black",
  "very-hard": "bg-orange-600 text-white",
  "super-hard": "bg-red-700 text-white",
} as const;

const flavorStyles = {
  spicy: "bg-red-700 text-white",
  dry: "bg-yellow-800 text-white",
  sweet: "bg-pink-700 text-white",
  bitter: "bg-sky-950 text-white",
  sour: "bg-lime-800 text-white",
} as const;

export default function BerryCard({
  berry,
  berryAsItem,
}: {
  berry: Berry;
  berryAsItem: Item;
}) {
  const { name, firmness, flavors } = berry;
  const berryName = name.replaceAll("-", " ");
  const flavor = flavors.filter((f) => f.potency !== 0)[0];
  const flavorName = flavor.flavor.name as BerryFlavor["name"];

  return (
    <CatalogCard>
      <Sprite
        sprite={berryAsItem.sprites.default}
        alt={berryName}
        defaultSrc="/unknown-berry.png"
      />
      <Title>{berryName}</Title>
      <div className="p-4 space-y-4">
        <CategorizedBerryData
          data={firmness.name.replaceAll("-", " ")}
          category="Firmness"
          unitStyles={firmnessStyles[firmness.name as BerryFirmness["name"]]}
        />
        <CategorizedBerryData
          data={flavorName}
          category="Flavor"
          unitStyles={flavorStyles[flavorName]}
        />
      </div>
    </CatalogCard>
  );
}

export function CategorizedBerryData({
  category,
  data,
  unitStyles,
}: {
  category: string;
  data: string;
  /**
   * Tailwind classes for the unit. These classes must
   * only mess with background color and border color. */
  unitStyles: string;
}) {
  return (
    <p>
      <span className="block border border-solid border-black border-b-0 w-max px-1">
        {category}:
      </span>
      <span
        className={`block px-2 py-1 capitalize border border-solid border-black ${unitStyles}`}
      >
        {data}
      </span>
    </p>
  );
}
