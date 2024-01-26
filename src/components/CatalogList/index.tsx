export default async function CatalogList({
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
