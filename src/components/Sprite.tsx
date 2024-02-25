import Image from "next/image";

export default function Sprite({
  src,
  defaultSrc,
  alt,
  extraClasses
}: {
  src?: string | null;
  defaultSrc: string;
  alt: string;
  extraClasses?: string;
}) {
  return (
    <Image
      src={src || defaultSrc}
      width="100"
      height="100"
      alt={alt}
      className={`image-pixelated ${extraClasses}`}
    />
  );
}
