import CardSkeleton from "../CardSkeleton";

export default function CatalogListSkeleton({ numOfItems }: { numOfItems: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-stretch justify-center gap-x-3 gap-y-6">
      {Array(numOfItems)
        .fill(undefined)
        .map((_, i) => {
          return <CardSkeleton key={i} />;
        })}
    </div>
  );
}
