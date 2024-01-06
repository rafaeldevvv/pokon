export default function CatalogSection({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <section className="container my-16" aria-label={label}>
      {children}
    </section>
  );
}
