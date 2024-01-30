/**
 * @file Defines the types used across the entire application.
 */

import type { Pokemon, PokemonColor } from "pokenode-ts";

export type PokemonWithColor = Pokemon & { color: PokemonColor["name"] };

export interface CatalogPageParams {
  page: string;
}

export type StatNames =
  | "hp"
  | "attack"
  | "defense"
  | "special-defense"
  | "special-attack"
  | "speed"
  | "accuracy"
  | "evasion";

export type ShownStatNames = "hp" | "attack" | "speed" | "defense";

export type BaseStats = {
  [Name in StatNames]: number | undefined;
};

export type * from "pokenode-ts";
