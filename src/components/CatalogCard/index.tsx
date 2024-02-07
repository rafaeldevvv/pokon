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
