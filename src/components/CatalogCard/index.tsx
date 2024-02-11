import Image from "next/image";

export default function CatalogCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="border border-solid border-black h-full grid grid-rows-subgrid row-span-3 gap-0"
      style={{
        // grid-rows-subgrid is not applying for some reason
        gridTemplateRows: "subgrid",
      }}
    >
      {children}
    </div>
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-y border-solid border-black py-2 px-2 flex items-center h-full">
      <h3 className="capitalize text-center leading-none font-title text-2xl mx-auto">
        {children}
      </h3>
    </div>
  );
}

export function Sprite({
  sprite,
  alt,
  defaultSrc,
}: {
  sprite: string | null;
  alt: string;
  defaultSrc: string;
}) {
  return (
    <div className="py-4">
      <Image
        src={sprite || defaultSrc}
        width="100"
        height="100"
        alt={alt}
        className="mx-auto image-pixelated"
      />
    </div>
  );
}