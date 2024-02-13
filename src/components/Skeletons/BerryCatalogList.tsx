import CatalogList from "../CatalogList";
import BerryCardSkeleton from "./BerryCard";

export default function BerryCatalogListSkeleton({
  numOfItems,
}: {
  numOfItems: number;
}) {
  return (
    <CatalogList>
      {Array(numOfItems)
        .fill(undefined)
        .map((_, i) => (
          <li key={i}>
            <BerryCardSkeleton />
          </li>
        ))}
    </CatalogList>
  );
}
