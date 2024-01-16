import { notFound } from "next/navigation";

export default function UnknownPage() {
   /* im doing this because if /pokemon-catalog/page is not publicly accessible
   then the not found page in pokemon-catalog does not catch the error */
   notFound();
}