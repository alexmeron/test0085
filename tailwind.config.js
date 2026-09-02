import { figmaTheme } from './src/styles/tailwind-theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: figmaTheme.colors,
      spacing: figmaTheme.spacing,
      borderRadius: figmaTheme.borderRadius,
      fontSize: figmaTheme.fontSize,
      fontWeight: figmaTheme.fontWeight,
      lineHeight: figmaTheme.lineHeight,
      fontFamily: figmaTheme.fontFamily,
    },
  },
  plugins: [],
}
