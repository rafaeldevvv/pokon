import LoadingCard from "../CardSkeleton";
import catalogConfig from "@/catalog-config";
const { itemsPerPage } = catalogConfig;

export default function LoadingList({ numOfItems }: { numOfItems: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-stretch justify-center gap-x-3 gap-y-6">
      {Array(numOfItems)
        .fill(undefined)
        .map(() => {
          return <LoadingCard />;
        })}
    </div>
  );
}
