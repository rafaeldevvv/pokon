import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchButton({ onSearch }: { onSearch: () => void }) {
   return (
     <button
       role="submit"
       className="fill-gray absolute right-0 top-0 bottom-0 px-4 text-gray-400 hover:text-black"
       onClick={() => {
         onSearch();
       }}
     >
       <span className="sr-only">Search</span>
       <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
     </button>
   );
 }