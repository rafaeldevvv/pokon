export default function PokedexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container pt-header">{children}</div>;
}
