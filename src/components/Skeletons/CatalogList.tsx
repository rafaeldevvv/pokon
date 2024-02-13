import CatalogList from "../CatalogList";

type CardComponent = () => React.ReactNode;

export default function CatalogListSkeleton({
  numOfItems,
  CardComponent,
}: {
  numOfItems: number;
  CardComponent: CardComponent
}) {
  return (
    <CatalogList>
      {Array(numOfItems)
        .fill(undefined)
        .map((_, i) => (
          <li key={i}>
            <CardComponent />
          </li>
        ))}
    </CatalogList>
  );
}
