import { PokemonSprites } from "@/ts/types";

export default function getAppropriatePokemonSprite(sprites: PokemonSprites) {
  const { front_default } = sprites;
  if (front_default !== null) return front_default;
}
