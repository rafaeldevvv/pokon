export default function Home() {
  return (
    <div className="container">
      <h1 className="text-8xl font-title text-center">Pokón</h1>
      <p className="text-center max-w-lg mx-auto">
        Explore a variety of creatures, find special berries, and check out essential items for your journey.
      </p>
      <SearchForm />
    </div>
  );
}

export function SearchForm() {
  return (
    <form role="search">
      <label htmlFor="search-input" id="search-input-label" className="">
        Search Pokón
      </label>
      <SearchComboboxInput
        id="search-input"
        placeholder="Search for a pokemon, berries or items"
        expanded={false}
        controls="search-results"
        labelledBy="search-input-label"
      />
      <button role="submit">Search</button>
      <div
        role="listbox"
        id="search-results"
        aria-labelledby="search-input-label"
      ></div>
    </form>
  );
}

function SearchComboboxInput({
  id,
  placeholder,
  expanded,
  controls,
  labelledBy,
}: {
  id: string;
  placeholder: string;
  expanded: boolean;
  controls: string;
  labelledBy: string;
}) {
  return (
    <input
      type="search"
      id={id}
      placeholder={placeholder}
      role="combobox"
      aria-expanded={expanded}
      aria-controls={controls}
      aria-labelledby={labelledBy}
    />
  );
}
