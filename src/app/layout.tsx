import "./globals.css";
import type { Metadata } from "next";
import { keywords } from "./shared-metadata";

import { vt323, courier } from "@/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

const appName = process.env.APP_NAME as string,
  creatorName = process.env.CREATOR_NAME as string,
  baseUrl = process.env.BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
  console.log("X".repeat(100));
  console.log("rendering global layout, variable are");
  console.log(vt323.variable, courier.variable);
  console.log("X".repeat(100));
  return (
    <html
      lang="en"
      className={[vt323.variable, courier.variable, "h-full"].join(" ")}
    >
      <body className="font-body h-full grid grid-rows-global-layout">
        <Header />
        <main>{children}</main>
        <Footer />
        <ProgressBar />
      </body>
    </html>
  );
}
