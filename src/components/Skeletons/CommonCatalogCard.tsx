import ListSkeleton from "./List";
import BaseCardSkeleton from "./BaseCatalogCard";

export default function CardSkeleton() {
  return (
    <BaseCardSkeleton>
      <ListSkeleton numOfItems={4} gap="8px" />
    </BaseCardSkeleton>
  );
}
