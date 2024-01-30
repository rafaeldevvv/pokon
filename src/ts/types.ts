/**
 * @file Defines the types used across the entire application.
 */

import type { Pokemon, PokemonColor } from "pokenode-ts";

export type PokemonWithColor = Pokemon & { color: PokemonColor["name"] };

export interface CatalogPageParams {
  page: string;
}

/** Pokemon stat names. */
export type StatNames =
  | "hp"
  | "attack"
  | "defense"
  | "special-defense"
  | "special-attack"
  | "speed"
  | "accuracy"
  | "evasion";

/** Pokemon stat names that are shown in pokemon cards. */
export type ShownStatNames = "hp" | "attack" | "speed" | "defense";

/**
 * An object mapping stat names to stat values.
 * Each value might be undefined because the information
 * about the stat might not be available.
 */
export type BaseStats = {
  [Name in StatNames]: number | undefined;
};

export type * from "pokenode-ts";
