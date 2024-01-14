import { notFound, permanentRedirect } from "next/navigation";

/**
 * Throws a NEXT_NOT_FOUND error if the page isn't valid.
 * 
 * @param page The page to check.
 * @param total The total number of pages available.
 */
export default function checkPageNumber(
  page: number,
  total: number
) {
  if (page < 1 || page > total || !Number.isFinite(page)) {
    notFound();
  }
}
