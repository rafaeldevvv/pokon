// import CatalogCard from "../CatalogCard";

export default function CardSkeleton() {
  return (
    <div className="border border-solid border-black">
      <span className="sr-only">Loading item</span>
      <div className="py-4 border-b border-black border-solid">
        <div className="w-[100px] max-w-full rounded animate-pulse mx-auto bg-gray-300 aspect-square" />
      </div>
      <div className="py-2 px-2 border-b border-black border-solid">
        <div className="max-w-full w-36 h-6 bg-gray-300 animate-pulse rounded mx-auto"></div>
      </div>
      <div className="px-2 py-4">
        {Array(4)
          .fill(null)
          .map((_, i) => {
            return (
              <div
                key={i}
                className="max-w-full w-32 h-4 bg-gray-300 animate-pulse rounded mb-2"
              />
            );
          })}
      </div>
    </div>
  );
}
