import CatalogList, { ListItem } from "../CatalogList";
import BerryCard from "../BerryCard";
import { NamedAPIResourceList } from "@/ts/types";
import { getBerriesForList } from "@/data-fetching/berries";
import { getItem } from "@/data-fetching/items";

export default async function BerriesList({
  list,
}: {
  list: NamedAPIResourceList;
}) {
  const berries = await getBerriesForList(list),
    berriesAsItems = await Promise.all(
      berries.map((b) => getItem(b.item.name))
    );

  return (
    <CatalogList>
      {berries.map((b, i) => (
        <ListItem key={b.name}>
          <BerryCard berry={b} berryAsItem={berriesAsItems[i]}></BerryCard>
        </ListItem>
      ))}
    </CatalogList>
  );
}
