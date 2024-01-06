import { notFound, permanentRedirect } from "next/navigation";

/**
 * Redirects the user to another url if the page is the first one
 * or throws a NEXT_NOT_FOUND error if the page isn't valid.
 * 
 * @param page The page to check.
 * @param total The total number of pages available.
 * @param redirectUrl The url to redirect the user to in case the page is the first one.
 */
export default function checkPageNumber(
  page: number,
  total: number,
  redirectUrl: string
) {
  if (page < 1 || page > total || !Number.isFinite(page)) {
    notFound();
  }

  if (page === 1) {
    permanentRedirect(redirectUrl);
  }
}
