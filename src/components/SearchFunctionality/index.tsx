"use client";
import SearchForm from "../SearchForm";

export default function SearchFunctionality() {
  return (
    <SearchForm
      label="Search Pokón"
      searchValue=""
      onSearch={() => {}}
      onSearchValueChange={() => {}}
      placeholder="Search for a pokemon, berries or items"
    />
  );
}
