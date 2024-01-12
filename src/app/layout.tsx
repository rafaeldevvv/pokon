import "./globals.css";
import type { Metadata } from "next";
import { keywords } from "./shared-metadata";

import { vt323, courier } from "@/fonts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const appName = process.env.APP_NAME as string,
  creatorName = process.env.CREATOR_NAME as string;

export const metadata: Metadata = {
  title: { default: `${appName}`, template: `%s | ${appName}` },
  authors: [
    { name: creatorName, url: "https://rafaeldevvv.github.io/portfolio" },
  ],
  keywords,
  creator: creatorName,
  publisher: creatorName,
  generator: "Next.js",
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot: {
      follow: true,
      index: true,
      nocache: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[vt323.variable, courier.variable, "h-full"].join(" ")}
    >
      <body className="font-body h-full grid grid-rows-global-layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
