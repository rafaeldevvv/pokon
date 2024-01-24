import { Item } from "@/ts/types";
import CatalogCard from "../CatalogCard";
import Image from "next/image";

export default function ItemCard({ item }: { item: Item }) {
  return (
    <CatalogCard>
      <ItemSprite sprite={item.sprites.default} alt={item.name} />
      <div className="p-2 border-t border-t-black border-solid">
        <h3 className="text-center capitalize">{item.name.replaceAll("-", " ")}</h3>
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
