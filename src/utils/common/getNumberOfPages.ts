import catalogConfig from "@/catalog-config";

/**
 * Gets the number of pages for a particular number of resources
 * based on the value of itemsPerPage in the catalog configuration file.
 */
export default function getNumberOfPages(numResources: number) {
  return Math.ceil(numResources / catalogConfig.itemsPerPage);
}
