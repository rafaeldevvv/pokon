export default function CatalogList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-stretch justify-center gap-x-3 gap-y-6">
      {children}
    </ul>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="grid grid-rows-subgrid row-span-3"
      style={{
        // grid-rows-subgrid is not applying for some reason
        gridTemplateRows: "subgrid",
      }}
    >
      {children}
    </li>
  );
}
