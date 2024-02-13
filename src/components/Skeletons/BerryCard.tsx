import RectSkeleton from "./Rect";

export default function BerryCardSkeleton() {
  return (
    <div className="border border-solid border-black">
      <span className="sr-only">Loading item</span>
      <div className="py-4 border-b border-black border-solid">
        <RectSkeleton
          height="100px"
          width="100px"
          additionalClasses="mx-auto"
        />
      </div>
      <div className="py-2 px-2 border-b border-black border-solid">
        <RectSkeleton height="20px" width="100%" />
      </div>
      <div className="px-2 py-4">
        <BerryCardInfoSkeleton />
      </div>
    </div>
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
