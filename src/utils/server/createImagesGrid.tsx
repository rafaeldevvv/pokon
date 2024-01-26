import { ImageResponse } from "next/og";
import "server-only";

/**
 * Creates a grid-like arrangement of images.
 *
 * @param sources - An array of image sources.
 * @returns - A promise that resolves to a ImageResponse object.
 */
export default async function createImagesGrid(sources: string[]) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "hsl(0 100% 95%)",
        }}
      >
        {sources.map((s) => (
          // disable eslint here because i don't need to add an alt, neither to use next.js Image component
          // eslint-disable-next-line
          <img src={s} style={{ width: "100px", height: "100px" }} key={s} />
        ))}
      </div>
    ),
    { width: 5 * 100, height: 5 * 100 }
  );
}
