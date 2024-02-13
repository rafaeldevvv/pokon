export default function RectSkeleton({
  height,
  width = "100%",
  additionalClasses = "",
  rounded = true,
}: {
  /** A valid CSS value for the `height` property. */
  height: string;
  /** A valid CSS value for the `width` property. */
  width?: string;
  /** Additional classes you might want to set. */
  additionalClasses?: string;
  rounded?: boolean;
}) {
  let classes = `bg-gray-300 max-w-full animate-pulse ${additionalClasses}`;
  if (rounded) classes += " rounded";
  return <div style={{ height, width }} className={classes} />;
}
