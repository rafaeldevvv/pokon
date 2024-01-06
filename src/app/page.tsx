"use client";

import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <div className="bg-black [@supports(backdrop-filter:brightness(.2))]:bg-[url('/homepage-background.png')] [@supports(backdrop-filter:brightness(.2))]:bg-cover [@supports(backdrop-filter:brightness(.2))]:bg-fixed">
      <div className="[@supports(backdrop-filter:brightness(.2))]:bg-center [@supports(backdrop-filter:brightness(.2))]:backdrop-brightness-50 [@supports(backdrop-filter:brightness(.2))]:backdrop-blur-sm">
        <div className="container min-h-screen flex justify-center content-center flex-col">
          <h1 className="text-8xl font-title text-center text-white">Pokón</h1>
          <p className="text-center max-w-lg mx-auto text-white mb-2">
            Explore a variety of creatures, find special berries, and check out
            essential items for your journey.
          </p>
          <SearchForm
            label="Search Pokón"
            searchValue=""
            onSearch={() => {}}
            onSearchValueChange={() => {}}
            placeholder="Search for a pokemon, berries or items"
          />
        </div>
      </div>
    </div>
  );
}
