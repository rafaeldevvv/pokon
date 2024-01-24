"use client";

import Pagination from "../Pagination";
import { useSelectedLayoutSegments } from "next/navigation";

/**
 * A pagination for a catalog.
 * It is supposed to be used in the layout
 * of the catalog, e.g. if the catalog is
 * `/pokemon-catalog/`, then this component should be
 * in `/pokemon-catalog/layout.tsx` so that it can catch
 * `/pokemon-catalog/page/1`, `/pokemon-catalog/page/4` and so
 * on.
 */
export default function CatalogPagination({
  totalPages,
  baseUrl,
}: {
  /**
   * The total number of pages available for the catalog.
   */
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
