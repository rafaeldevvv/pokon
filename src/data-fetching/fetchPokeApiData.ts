import "server-only";
type ListOptions<Type> = { limit?: Type; offset?: Type };

/**
 * Fetches data from the PokeAPI. It expects a path that is appended to 
 * `https://pokeapi.co/api/v2/` and optional query parameters.
 * 
 * @param path - The path pointing to the resource you wish to fetch.
 * @param queryParameters - Query parameters defining limit and offset.
 * @returns - Any resource from the 
 */
export default function fetchPokeApiData(
  path: string,
  queryParameters?: ListOptions<number>
) {
  let queryString = "";
  if (queryParameters) {
    const { limit, offset } = queryParameters;
    const queryObj = {} as ListOptions<string>;
    if (limit) {
      queryObj.limit = limit.toString();
    }
    if (offset) {
      queryObj.offset = offset.toString();
    }
    queryString = `?${new URLSearchParams(queryObj)}`;
  }

  return fetch(`https://pokeapi.co/api/v2/${path}/${queryString}`, {
    next: { revalidate: 60 * 60 * 24 * 7 }, // revalidate the data every week
  }).then((res) => res.json());
}
