
/**
 * @file Defines the types used across the entire application.
 */

import type { Pokemon, PokemonColor } from "pokenode-ts";

export type PokemonWithColor = Pokemon & { color: PokemonColor["name"] };

export interface CatalogPageParams {
   page: string;
}

export type * from "pokenode-ts";