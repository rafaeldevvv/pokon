/**
 * @param page The page to check.
 * @param total The total number of pages available.
 * @returns - true if page is invalid and false otherwise.
 */
export default function checkPageNumber(
  page: number,
  total: number
) {
  if (page < 1 || page > total || !Number.isFinite(page)) {
    return true;
  }
  return false;
}
