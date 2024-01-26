import { getItemsForPage } from "@/data-fetching/items";
import CatalogList from "../CatalogList";
import ItemCard from "../ItemCard";

export default async function ItemsList({ page }: { page: number }) {
  const items = await getItemsForPage(page);

  return (
    <CatalogList>
      {items.map((item) => (
        <ItemCard item={item} key={item.name} />
      ))}
    </CatalogList>
  );
}
