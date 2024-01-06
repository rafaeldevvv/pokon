"use client";

import SearchInput from "@/components/SearchInput";
import SearchButton from "@/components/SearchButton";

export default function SearchForm({
  label,
  searchValue,
  onSearch,
  onSearchValueChange,
  placeholder,
  classes = "w-full max-w-lg mx-auto bg-white border-2 border-[#ddd] rounded h-12",
}: {
  label: string;
  searchValue: string;
  onSearch: () => void;
  onSearchValueChange: (newValue: string) => void;
  placeholder: string;
  classes?: string;
}) {
  return (
    <form role="search" className={`relative flex items-center ${classes}`}>
      <label htmlFor="search-input" id="search-input-label" className="sr-only">
        {label}
      </label>
      <SearchInput
        id="search-input"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder={placeholder}
        expanded={false}
        controls="search-results"
        labelledBy="search-input-label"
      />
      <SearchButton onSearch={() => {}} />
      <div
        role="listbox"
        id="search-results"
        aria-labelledby="search-input-label"
      ></div>
    </form>
  );
}
