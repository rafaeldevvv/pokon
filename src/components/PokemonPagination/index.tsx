"use client";

import Pagination from "../Pagination";
import { useSelectedLayoutSegments } from "next/navigation";
import { checkPageNumber } from "@/utils/common";

export default function PokemonPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const segments = useSelectedLayoutSegments();
  const [_, page] = segments;
  const currentPage = Number(page) || 1;
  if (currentPage !== 1) checkPageNumber(currentPage, totalPages, "/pokemon-catalog");

  return <Pagination current={currentPage} total={totalPages} baseUrl={"/pokemon-catalog/"} />;
}
