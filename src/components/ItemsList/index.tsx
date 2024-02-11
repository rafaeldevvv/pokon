import getItemsForPage from "@/data-fetching/items/getItemsForPage";
import CatalogList, { ListItem } from "../CatalogList";
import ItemCard from "../ItemCard";

export default async function ItemsList({ page }: { page: number }) {
  const items = await getItemsForPage(page);

  return (
    <CatalogList>
      {items.map((item) => (
        <ListItem key={item.name}>
          <ItemCard item={item} />
        </ListItem>
      ))}
    </CatalogList>
  );
}
