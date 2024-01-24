import CatalogCard from "../CatalogCard";

export default function CardSkeleton() {
  return (
    <CatalogCard>
      <span className="sr-only">Loading item</span>
      <div className="py-4 border-b border-black border-solid">
        <div className="h-[100px] w-[100px] rounded animate-pulse mx-auto bg-gray-300" />
      </div>
      <div className="py-2 px-2 border-b border-black border-solid">
        <div className="max-w-full w-36 h-6 bg-gray-300 animate-pulse rounded mx-auto"></div>
      </div>
      <div className="px-2 py-4">
        {Array(3)
          .fill(null)
          .map(() => {
            return (
              <div className="max-w-full w-32 h-4 bg-gray-300 animate-pulse rounded mb-4" />
            );
          })}
      </div>
    </CatalogCard>
  );
}
