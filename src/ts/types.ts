/**
 * @file Defines the types used across the entire application.
 */

import type { Pokemon, PokemonColor } from "pokenode-ts";

export type PokemonWithColor = Pokemon & { color: PokemonColor["name"] };
