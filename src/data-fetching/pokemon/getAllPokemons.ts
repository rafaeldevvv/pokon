import getPokemons from "./getPokemons";

export default async function getAllPokemons() {
  const pokemons = await getPokemons(0, 99999);
  return pokemons;
}
