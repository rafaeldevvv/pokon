import { Item, NamedAPIResource } from "@/ts/types";
import CatalogCard from "../CatalogCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({ item }: { item: Item }) {
  const { attributes } = item;

  return (
    <CatalogCard>
      <ItemSprite sprite={item.sprites.default} alt={item.name} />
      <div className="p-2 border-t border-t-black border-solid border-b border-b-black">
        <h3 className="text-center capitalize">
          {item.name.replaceAll("-", " ")}
        </h3>
      </div>
      <div className="p-2">
        <ItemAttrs attrs={attributes} />
      </div>
    </CatalogCard>
  );
}

export function ItemSprite({
  sprite,
  alt,
}: {
  sprite: string | null;
  alt: string;
}) {
  return (
    <div className="py-4">
      <Image
        src={sprite || "/unknown-item.png"}
        width="100"
        height="100"
        alt={alt}
        className="mx-auto"
      />
    </div>
  );
}

export function ItemAttrs({ attrs }: { attrs: NamedAPIResource[] }) {
  const hasAttrs = attrs.length !== 0;
  if (!hasAttrs) {
    return <p className="text-center text-sm">No attributes</p>;
  }

  return (
    <div className="text-sm">
      <ul className="">
        {attrs.map((attr) => (
          <li key={attr.name} className="capitalize">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            {attr.name.replaceAll("-", " ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
