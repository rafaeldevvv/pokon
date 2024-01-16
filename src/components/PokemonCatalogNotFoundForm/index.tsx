"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PokemonCatalogNotFoundForm({
  numOfPages,
}: {
  numOfPages: number;
}) {
  const router = useRouter();
  const [page, setPage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace("/pokemon-catalog/page/" + page);
      }}
      className="flex gap-2 w-max mx-auto"
    >
      <label htmlFor="page" className="sr-only">
        Page
      </label>
      <input
        type="number"
        value={page}
        id="page"
        onChange={(e) => {
          const value = e.target.value;
          const numberValue = Number(value);
          if (Number.isFinite(numberValue) && numberValue <= numOfPages) {
            setPage(value);
          }
        }}
        required
        min="1"
        max={numOfPages}
        placeholder={`e.g. ${Math.ceil(numOfPages / 2)}`}
        className="block p-2 w-40 max-w-full border border-solid border-black"
      />
      <button
        type="submit"
        className="text-white font-title border-2 border-solid border-red-600 bg-red-600 px-2 text-xl hover:text-red-600 hover:bg-white active:scale-90"
      >
        GO!
      </button>
    </form>
  );
}
