"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="max-w-lg mx-auto pt-header text-center">
      <div className="py-32 px-4">
        <h1 className="font-title text-6xl">Unexpected error</h1>
        <p className="mb-4">
          Sorry, an unexpected error occurred, if trying again doesn&apos;t solve the
          problem, please{" "}
          <Link
            href="mailto:rafaeldeveloperr@gmail.com"
            className="underline text-amber-600 hover:no-underline"
          >
            contact me
          </Link>
        </p>
        <button
          onClick={reset}
          className="bg-red-600 text-white px-6 py-2 inline-block border-2 border-solid border-red-600 hover:bg-white hover:text-red-600 active:scale-90 mr-4"
        >
          Try again
        </button>
        <Link
          href="/"
          className="bg-red-600 text-white px-6 py-2 inline-block border-2 border-solid border-red-600 hover:bg-white hover:text-red-600 active:scale-90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
