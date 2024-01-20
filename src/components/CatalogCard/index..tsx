export default function CatalogCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border border-solid border-black h-full">{children}</div>
  );
}
