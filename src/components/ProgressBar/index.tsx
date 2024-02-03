"use client";

import NextTopLoader from "nextjs-toploader";

export default function ProgressBar() {
  return (
    <>
      <NextTopLoader
        height={5}
        color="#9f1239" // color is tailwind's rose-800
        initialPosition={.2}
        speed={200}
        zIndex={99999}
        showSpinner={false}
      />
    </>
  );
}
