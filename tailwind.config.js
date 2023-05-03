import { fontFamily } from "tailwindcss/defaultTheme";
import { current } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export const content = [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./components/**/*.{js,ts,jsx,tsx,mdx}",

   // Or if using `src` directory:
   "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
   extend: {
      fontFamily: {
         sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: { ...current, "light-gold": "#f5bc51", "dark-gold": "#533519" },
   },
   container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1260px" },
   },
};
export const plugins = [
   require("tailwindcss-animate"),
   require("@tailwindcss/typography"),
];
export const darkMode = ["class"];
