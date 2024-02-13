import RectSkeleton from "./Rect";

export default function ListSkeleton({
  numOfItems,
  itemHeight = "20px",
  gap = "5px",
  itemWidth = "100%",
}: {
  numOfItems: number;
  /** A valid CSS value for the `height` property. Defaults to `"20px"`. */
  itemHeight?: string;
  /** A valid CSS value for the `margin-bottom` property. Defaults to `"5px"`. */
  gap?: string;
  /** A valid CSS value for the `width` property. Defaults to `"100%"`. */
  itemWidth?: string;
}) {
  return (
    <ul>
      {Array(numOfItems)
        .fill(null)
        .map((_, i) => {
          return (
            <li
              style={{ marginBottom: i === numOfItems - 1 ? undefined : gap }}
              key={i}
            >
              <RectSkeleton height={itemHeight} width={itemWidth} />
            </li>
          );
        })}
    </ul>
  );
}
