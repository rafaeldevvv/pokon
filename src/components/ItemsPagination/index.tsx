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
  /* if we're at /items-catalog or /items-catalog/page
  then the page is 1 */
  const currentPage = segments.length <= 1 ? 1 : Number(page);

  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      baseUrl={"/items-catalog/"}
    />
  );
}
