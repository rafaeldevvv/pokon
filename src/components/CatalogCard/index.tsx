export default function CatalogCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="border border-solid border-black h-full grid grid-rows-subgrid "
      style={{
        display: "grid",
        gridTemplateRows: "subgrid",
        gridRow: "span 3",
        gap: "0",
      }}
    >
      {children}
    </div>
  );
}
