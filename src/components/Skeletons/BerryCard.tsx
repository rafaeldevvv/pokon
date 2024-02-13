import RectSkeleton from "./Rect";
import BaseCardSkeleton from "./BaseCatalogCard";

export default function BerryCardSkeleton() {
  return (
    <BaseCardSkeleton>
      <BerryCardInfoSkeleton />
    </BaseCardSkeleton>
  );
}

export function BerryCardInfoSkeleton() {
  return (
    <ul className="space-y-4">
      {Array(2)
        .fill(undefined)
        .map((_, i) => {
          return (
            <li key={i}>
              <RectSkeleton height="1.7rem" width="50%" rounded={false} />
              <RectSkeleton height="2rem" width="100%" rounded={false} />
            </li>
          );
        })}
    </ul>
  );
}
