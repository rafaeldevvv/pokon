"use client";

import Pagination from "../Pagination";
import { useSelectedLayoutSegments } from "next/navigation";

export default function PokemonPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const segments = useSelectedLayoutSegments();
  const [_, page] = segments;
  /* if there are no segments, i.e. we're at /pokemon-catalog
  then the page is 1 */
  const currentPage = segments.length === 0 ? 1 : Number(page);

  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      baseUrl={"/pokemon-catalog/"}
    />
  );
}
