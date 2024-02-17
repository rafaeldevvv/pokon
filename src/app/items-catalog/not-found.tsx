import getCount from "@/data-fetching/items/getCount";
import getNumberOfPages from "@/utils/common/getNumberOfPages";

import NotFoundForm from "@/components/GoToPageForm";
import NotFoundTitle from "@/components/NotFoundTitle";

export default async function PageNotFound() {
  const pokemonsTotal = await getCount();
  const pages = getNumberOfPages(pokemonsTotal);

  return (
    <div className="max-w-lg text-center px-4 mx-auto my-16">
      <NotFoundTitle />
      <p className="mb-4">
        The page you&apos;re looking for is not available. Which page would you
        like to see?
      </p>
      <NotFoundForm numOfPages={pages} baseUrl="/items-catalog/" />
    </div>
  );
}
