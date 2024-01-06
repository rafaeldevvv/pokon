import { PokemonClient } from "pokenode-ts";

const pokemonApi = new PokemonClient();

/**
 * Fetches a list of Pokemon given a specific offset and limit.
 * 
 * @param offset - How many Pokemon should be skipped.
 * @param limit - How many Pokemon at most should be retrieved.
 * @returns A list of Pokemon.
 */
export default async function getPokemons(offset: number, limit: number) {
  const pokemonResources = await pokemonApi
    .listPokemons(offset, limit)
    .then(({ results }) => results);

  const pokemons = await Promise.all(
    pokemonResources.map((pr) => {
      return pokemonApi.getPokemonByName(pr.name);
    })
  );

  return pokemons;
}
