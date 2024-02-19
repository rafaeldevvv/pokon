import type { Config } from "tailwindcss";

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
        body: ["var(--ff-courier-prime)", ...defaultTheme.fontFamily.mono],
        title: ["var(--ff-vt323)", ...defaultTheme.fontFamily.mono],
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
      padding: "1.5rem",
      screens: {
        xs: "100%",
        lg: "64rem",
      },
    },
  },
};
export default config;
