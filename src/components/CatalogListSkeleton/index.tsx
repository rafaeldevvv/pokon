import CardSkeleton from "../CardSkeleton";
import CatalogList from "../CatalogList";

export default function CatalogListSkeleton({
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
            <CardSkeleton />
          </li>
        ))}
    </CatalogList>
  );
}
