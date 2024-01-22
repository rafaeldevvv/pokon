import type { Metadata } from "next";
import SearchFunctionality from "@/components/SearchFunctionality";

const appName = process.env.APP_NAME as string,
  appDesc = process.env.APP_DESCRIPTION as string,
  creatorTwitterUsername = process.env.CREATOR_TWITTER_USERNAME as string;

export const metadata: Metadata = {
  description: appDesc,
  openGraph: {
    title: appName,
    description: appDesc,
    url: "/",
    siteName: appName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/homepage-background.png", // absolute
        alt: "Pokemon",
      },
    ],
  },
  twitter: {
    card: "summary",
    creator: `@${creatorTwitterUsername}`,
    site: `@${creatorTwitterUsername}`,
    title: appName,
    description: appDesc,
    images: [
      {
        url: "/homepage-background.png", //absolute
        alt: "Pokemon",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="bg-black">
      <div className="container min-h-screen flex justify-center content-center flex-col">
        <h1 className="text-8xl font-title text-center text-white">Pokón</h1>
        <p className="text-center max-w-lg mx-auto text-white mb-2">
          Explore a variety of creatures, find special berries, and check out
          essential items for your journey.
        </p>
        <SearchFunctionality />
      </div>
    </div>
  );
}
