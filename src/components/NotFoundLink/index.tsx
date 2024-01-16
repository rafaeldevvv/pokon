import Link from "next/link";
import React from "react";

export default function NotFoundLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className="bg-red-600 text-white px-6 py-2 inline-block border-2 border-solid border-red-600 hover:bg-white hover:text-red-600"
      href={href}
    >
      {children}
    </Link>
  );
}
