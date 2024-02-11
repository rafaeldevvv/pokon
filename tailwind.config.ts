import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "30em",
      md: "48em",
      lg: "62em",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ["var(--ff-body)", ...defaultTheme.fontFamily.mono],
        title: ["var(--ff-title)", ...defaultTheme.fontFamily.mono],
      },
      gridTemplateRows: {
        "global-layout": "max-content 1fr max-content",
      },
      spacing: {
        header: "83px",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          "text-shadow":
            "0px -2px black, -2px 0px black, 0 2px black, 2px 0 black",
        },
      });
    }),
  ],
};
export default config;
