import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-black [@supports(backdrop-filter:brightness(.2))]:bg-[url('/homepage-background.png')] [@supports(backdrop-filter:brightness(.2))]:bg-cover [@supports(backdrop-filter:brightness(.2))]:bg-fixed">
      <div className="[@supports(backdrop-filter:brightness(.2))]:bg-center [@supports(backdrop-filter:brightness(.2))]:backdrop-brightness-50 [@supports(backdrop-filter:brightness(.2))]:backdrop-blur-sm">
        <div className="container min-h-screen flex justify-center content-center flex-col">
          <h1 className="text-8xl font-title text-center text-white">Pokón</h1>
          <p className="text-center max-w-lg mx-auto text-white">
            Explore a variety of creatures, find special berries, and check out
            essential items for your journey.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export function SearchForm() {
  return (
    <form role="search" className="relative flex w-full max-w-lg mx-auto bg-white border-2 border-[#ddd] rounded items-center mt-4">
      <label htmlFor="search-input" id="search-input-label" className="sr-only">
        Search Pokón
      </label>
      <SearchComboboxInput
        id="search-input"
        placeholder="Search for a pokemon, berries or items"
        expanded={false}
        controls="search-results"
        labelledBy="search-input-label"
      />
      <button role="submit" className="fill-gray absolute right-0 top-0 bottom-0 px-4 text-gray-400 hover:text-black">
        <span className="sr-only">Search</span>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </button>
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
      className="rounded block h-12 pl-4 pr-8 w-full"
    />
  );
}
