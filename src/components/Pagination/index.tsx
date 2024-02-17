import Link from "next/link";
import GoToPageForm from "../GoToPageForm";
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
 */
export default function Pagination({
  total,
  current,
  baseUrl,
}: {
  /** The total number of pages. */
  total: number;
  /** The current active page. */
  current: number;
  /** The base url to which `"page/{number}"` is appended. */
  baseUrl: string;
}) {
  const invalid = checkPageNumber(current, total);

  if (invalid) {
    return (
      <Nav>
        <div className="flex items-center justify-center gap-6">
          <PageLink page={1} active={current === 1} baseUrl={baseUrl} />
          <Dots />
          <PageLink page={total} active={current === total} baseUrl={baseUrl} />
        </div>
      </Nav>
    );
  }

  const shouldRenderBeforeDots = current > 3;
  const shouldRenderAfterDots = current < total - 2;

  const middleLinks: React.ReactNode[] = [];
  for (let page = current - 1; page <= current + 1; page++) {
    if (page <= 1 || page >= total) continue;
    middleLinks.push(
      <PageLink
        page={page}
        active={current === page}
        baseUrl={baseUrl}
        key={page}
      />
    );
  }

  const links = (
    <div className="flex justify-center md:justify-between">
      {current > 1 && (
        <div className="hidden md:block">
          <PreviousPageLink baseUrl={baseUrl} current={current} />
        </div>
      )}
      <div className="flex flex-row items-center justify-center gap-x-[clamp(.5rem,4vw,1rem)] gap-y-6 flex-wrap">
        <PageLink page={1} active={current === 1} baseUrl={baseUrl} />
        {shouldRenderBeforeDots && <Dots />}
        {middleLinks}
        {shouldRenderAfterDots && <Dots />}
        <PageLink page={total} active={current === total} baseUrl={baseUrl} />
      </div>
      {current < total && (
        <div className="hidden md:block">
          <NextPageLink current={current} baseUrl={baseUrl} />
        </div>
      )}
    </div>
  );

  const formWrapperClasses =
    current > 1 && current < total
      ? "md:mx-auto"
      : current > 1
      ? "md:float-right"
      : "";

  return (
    <Nav>
      {links}
      <div
        className={`w-max mx-auto md:mx-0 mt-6 md:mt-8 ${formWrapperClasses}`}
      >
        <GoToPageForm baseUrl={baseUrl} numOfPages={total} />
      </div>
      <div className="clear-both"></div>
      <MobilePrevNextLinks current={current} total={total} baseUrl={baseUrl} />
    </Nav>
  );
}

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav
      aria-labelledby="pagination-heading"
      className="text-xs md:text-lg container"
    >
      <h2 className="sr-only" id="pagination-heading">
        Catalog Navigation
      </h2>
      {children}
    </nav>
  );
}

export function MobilePrevNextLinks({
  current,
  total,
  baseUrl,
}: {
  current: number;
  total: number;
  baseUrl: string;
}) {
  return (
    <div className="md:hidden flex justify-center gap-4 mt-6">
      {current > 1 && <PreviousPageLink baseUrl={baseUrl} current={current} />}
      {current < total && <NextPageLink current={current} baseUrl={baseUrl} />}
    </div>
  );
}

const baseLinkStyles =
    "flex items-center justify-center aspect-square text-3xl border-2 active:scale-90 box-border tracking-tighter w-[clamp(2.8rem,8vw,3.5rem)]",
  colorStyles =
    "border-red-600 hover:text-white hover:bg-red-600 text-red-600 bg-white",
  invertedColorStyles =
    "bg-red-600 text-white border-red-600 hover:text-red-600 hover:bg-white";

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
        className={`${baseLinkStyles} ${colorStyles} relative before:absolute before:inset-x-0 before:h-1 before:bg-red-600 before:top-[115%]`}
      >
        <span className="sr-only">page</span>
        <span className="-mb-1">{page}</span>
      </span>
    );
  }

  return (
    <BaseLink href={`${baseUrl}page/${page}`}>
      <span className="sr-only">page</span>
      <span className="-mb-1">{page}</span>
    </BaseLink>
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
    <BaseLink href={`${baseUrl}page/${current + 1}`} invertedColors>
      <span className="sr-only">next page</span>
      <FontAwesomeIcon icon={faChevronLeft} />
    </BaseLink>
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
    <BaseLink href={`${baseUrl}page/${current + 1}`} invertedColors>
      <span className="sr-only">next page</span>
      <FontAwesomeIcon icon={faChevronRight} />
    </BaseLink>
  );
}

type LinkProps = Parameters<typeof Link>[0];

export function BaseLink({
  invertedColors = false,
  children,
  ...linkProps
}: { invertedColors?: boolean; children: React.ReactNode } & LinkProps) {
  let linkColors: string;

  if (invertedColors) {
    linkColors = invertedColorStyles;
  } else {
    linkColors = colorStyles;
  }

  const { className } = linkProps;

  return (
    <Link
      {...linkProps}
      className={`${baseLinkStyles} ${linkColors} ${className || ""}`}
    >
      {children}
    </Link>
  );
}

export function Dots() {
  return <span className="tracking-tighter -mx-2">...</span>;
}
