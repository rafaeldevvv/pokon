"use client";

import SearchForm from "@/components/SearchForm";

export default function CatalogHeader({
  title,
  searchFormLabel,
  searchFormPlaceholder,
}: {
  title: string;
  searchFormPlaceholder: string;
  searchFormLabel: string;
}) {
  return (
    <header className="sticky top-header border-b border-black bg-white z-50">
      <div className="container flex flex-col md:flex-row items-center justify-between py-4">
        <h1 className="font-title mb-3 md:mb-0 text-4xl">{title}</h1>

        <div className="max-w-lg">
          <SearchForm
            placeholder={searchFormPlaceholder}
            searchValue=""
            onSearchValueChange={() => {}}
            onSearch={() => {}}
            label={searchFormLabel}
          />
        </div>
      </div>
    </header>
  );
}
