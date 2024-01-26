"use client";

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
  useRef,
  forwardRef,
  ForwardedRef,
} from "react";
import { useRouter } from "next/navigation";

export default function NotFoundForm({
  numOfPages,
  baseUrl,
}: {
  numOfPages: number;
  /**
   * A base url from the root. It has to end with a forward slash.
   *
   * @example "/catalog/"
   * */
  baseUrl: string;
}) {
  const router = useRouter();
  const [page, setPage] = useState("");
  const [error, setError] = useState<null | string>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const input = inputRef.current!;
      if (input.validity.valueMissing) {
        setError("Please, enter the page you want to go to");
      } else if (
        input.validity.rangeOverflow ||
        input.validity.rangeUnderflow
      ) {
        setError(`Page must be a number between 1 and ${numOfPages}`);
      } else if (input.validity.stepMismatch) {
        setError(`Page must be an integer between 1 and ${numOfPages}`);
      } else {
        router.replace(baseUrl + "page/" + page);
      }
    },
    [page, numOfPages, baseUrl, router]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = Number(value);
    if (Number.isFinite(numberValue)) {
      setPage(value);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-max mx-auto relative"
      noValidate
    >
      <p>
        <PageInput
          value={page}
          max={numOfPages}
          ref={inputRef}
          onChange={handleChange}
          error={error}
        />
      </p>
      <SubmitButton />
    </form>
  );
}

export const PageInput = forwardRef(function PageInput(
  {
    error,
    max,
    value,
    onChange,
  }: {
    error: null | string;
    max: number;
    value: string;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
  },
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <label htmlFor="page">
      <span className="sr-only">Page from 1 to {max} (required)</span>
      <input
        type="number"
        value={value}
        id="page"
        onChange={onChange}
        required
        min="1"
        max={max}
        placeholder={`1 to ${max}`}
        className="block p-2 w-40 max-w-full border border-solid border-black"
        ref={ref}
      />
      <span
        aria-live="polite"
        className={
          error
            ? "absolute top-[105%] left-0 bg-red-600 text-white p-2 text-sm"
            : ""
        }
      >
        {error}
      </span>
    </label>
  );
});

export function SubmitButton() {
  return (
    <button
      type="submit"
      className="text-white font-title border-2 border-solid border-red-600 bg-red-600 px-2 text-xl hover:text-red-600 hover:bg-white active:scale-90"
    >
      GO!
    </button>
  );
}
