/**
 * A componnet that shows a bar that indicates a
 * value based on a max value.
 */
export default function ValueIndicatorBar({
  max,
  value,
  fgColor,
  bgColor,
}: {
  max: number;
  value: number;
  /** a tailwind class for the foreground color */
  fgColor: string;
  /** a tailwind class for the background color */
  bgColor: string;
}) {
  const percentage = Math.round((value / max) * 100);
  return (
    <div className="flex gap-x-1 w-full items-center text-md">
      <div className={"h-6 rounded w-full " + bgColor}>
        <div
          className={"h-full relative rounded " + fgColor}
          style={{ width: percentage + "%" }}
        >
          <span className="absolute left-2 text-outline text-white top-1/2 -translate-y-1/2">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
