import { Pokemon, PokemonClient, type PokemonColor } from "pokenode-ts";
import type { PokemonWithColor } from "@/ts/types";
import catalogConfig from "@/catalog-config";
import getPokemons from "./getPokemons";

const pokemonApi = new PokemonClient();

export function findPokemonColor(pokemon: Pokemon, colors: PokemonColor[]) {
  return colors.find((c) =>
    c.pokemon_species.some((s) => s.name === pokemon.species.name)
  )?.name;
}

/**
 * Fetches a list of Pokemon given a specific offset and limit and
 * then maps the list so that each pokemon object has a string color 
 * property which tells their color.
 *
 * @param offset - How many pokemon should be skipped.
 * @param limit - How many pokemon at most should be fetched.
 * @returns - A list of pokemon with a color property.
 */
export default async function getPokemonsWithColors(
  offset: number,
  limit: number
): Promise<PokemonWithColor[]> {
  const pokemons = await getPokemons(offset, limit);

  const colors = await pokemonApi.listPokemonColors().then(({ results }) => {
    return Promise.all(
      results.map((r) => pokemonApi.getPokemonColorByName(r.name))
    );
  });

  const pokemonsWithColor: PokemonWithColor[] = pokemons.map((p) => ({
    ...p,
    color: findPokemonColor(p, colors)!,
  }));

  return pokemonsWithColor;
}
