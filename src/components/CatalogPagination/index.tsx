"use client";

import Pagination from "../Pagination";
import { useSelectedLayoutSegments } from "next/navigation";

export default function CatalogPagination({
  totalPages,
  baseUrl,
}: {
  totalPages: number;
  /**
   * A base url from the root. It has to end with a forward slash.
   *
   * @example "/catalog/"
   * */
  baseUrl: string;
}) {
  const segments = useSelectedLayoutSegments();
  const [_, page] = segments;
  const pageNumber = segments.length === 0 ? 1 : Number(page);

  return (
    <Pagination current={pageNumber} total={totalPages} baseUrl={baseUrl} />
  );
}
