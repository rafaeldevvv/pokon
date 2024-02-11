import { Item, NamedAPIResource } from "@/ts/types";
import CatalogCard, { Title, Sprite } from "../CatalogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({ item }: { item: Item }) {
  const { attributes } = item;

  return (
    <CatalogCard>
      <Sprite
        sprite={item.sprites.default}
        alt={item.name}
        defaultSrc="/unknown-item.png"
      />
      <Title>{item.name.replaceAll("-", " ")}</Title>
      <div className="p-2">
        <ItemAttrs attrs={attributes} />
      </div>
    </CatalogCard>
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
