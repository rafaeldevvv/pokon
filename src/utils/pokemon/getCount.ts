import {PokemonClient} from "pokenode-ts";

const pokemonApi = new PokemonClient();
/**
 * @returns the total number of Pokemon available.
 */
export default async function getPokemonCount() {
   const list = await pokemonApi.listPokemons();
   return list.count;
}