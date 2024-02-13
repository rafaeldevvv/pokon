import RectSkeleton from "./Rect";

export default function BaseCardSkeleton({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div className="px-2 py-4">{children}</div>
    </div>
  );
}
