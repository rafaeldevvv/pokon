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
  const currentPage = segments.length === 0 ? 1 : Number(page);

  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      baseUrl={"/pokemon-catalog/"}
    />
  );
}
