import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import checkPageNumber from "@/utils/common/checkPageNumber";

/**
 * A pagination component that expects the total number of pages,
 * the current page and a base url which is used as a prefix for the
 * available links. The links hrefs get `page/{number}` appended to the
 * base url, so the base url should end with a trailing forward slash.
 *
 * @param param0
 * @returns
 */
export default function Pagination({
  total,
  current,
  baseUrl,
}: {
  total: number;
  current: number;
  baseUrl: string;
}) {
  const invalid = checkPageNumber(current, total);

  let navContents = (
    <>
      <PageLink page={1} active={current === 1} baseUrl={baseUrl} />
      <Dots />
      <PageLink page={total} active={current === total} baseUrl={baseUrl} />
    </>
  );

  if (!invalid) {
    const shouldRenderFirstDots = current > 3;
    const shouldRenderLastDots = current < total - 2;

    const links: React.ReactNode[] = [];
    for (let page = current - 1; page <= current + 1; page++) {
      if (page <= 1 || page >= total) continue;
      links.push(
        <PageLink
          page={page}
          active={current === page}
          baseUrl={baseUrl}
          key={page}
        />
      );
    }

    navContents = (
      <>
        <h2 className="sr-only" id="pokemon-navigation-heading">
          Pokemon Catalog Navigation
        </h2>
        {current > 1 && (
          <PreviousPageLink baseUrl={baseUrl} current={current} />
        )}
        <PageLink page={1} active={current === 1} baseUrl={baseUrl} />
        {shouldRenderFirstDots && <Dots />}
        {links}
        {shouldRenderLastDots && <Dots />}
        <PageLink page={total} active={current === total} baseUrl={baseUrl} />
        {current < total && (
          <NextPageLink current={current} baseUrl={baseUrl} />
        )}
      </>
    );
  }

  return (
    <nav
      aria-labelledby="pokemon-navigation-heading"
      className="flex flex-row justify-center items-center gap-x-4 gap-y-6 flex-wrap"
    >
      {navContents}
    </nav>
  );
}

export function PageLink({
  page,
  active,
  baseUrl,
}: {
  page: number;
  active: boolean;
  baseUrl: string;
}) {
  if (active) {
    return (
      <span
        aria-current="page"
        className="relative flex items-center justify-center aspect-square bg-white text-3xl text-red-600 text-center w-14 border-2 border-red-600 before:absolute before:inset-x-0 before:h-1 before:bg-red-600 before:top-[115%]"
      >
        <span className="sr-only">page</span>
        {page}
      </span>
    );
  }

  return (
    <Link
      href={`${baseUrl}page/${page}`}
      className="flex items-center justify-center aspect-square bg-white text-3xl text-red-600 text-center w-14 border-2 border-red-600 hover:text-white hover:bg-red-600 active:scale-90"
    >
      <span className="sr-only">page</span>
      {page}
    </Link>
  );
}

export function PreviousPageLink({
  current,
  baseUrl,
}: {
  baseUrl: string;
  current: number;
}) {
  return (
    <Link
      href={`${baseUrl}page/${current - 1}`}
      className="flex items-center justify-center aspect-square bg-red-600 text-3xl text-white text-center w-14 border-2 border-red-600 hover:text-red-600 hover:bg-white active:scale-90"
    >
      <span className="sr-only">Previous page</span>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Link>
  );
}

export function NextPageLink({
  current,
  baseUrl,
}: {
  baseUrl: string;
  current: number;
}) {
  return (
    <Link
      href={`${baseUrl}page/${current + 1}`}
      className="flex items-center justify-center aspect-square bg-red-600 text-3xl text-white text-center w-14 border-2 border-red-600 hover:text-red-600 hover:bg-white active:scale-90"
    >
      <span className="sr-only">next page</span>
      <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}

export function Dots() {
  return <span>...</span>;
}
