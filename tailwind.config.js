import { figmaTheme } from './src/styles/tailwind-theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // Definimos directamente en theme (y NO en extend) para FORZAR a que 
    // SOLO existan las variables de Figma y se elimine todo rastro de Tailwind por defecto.
    colors: figmaTheme.colors,
    spacing: figmaTheme.spacing,
    borderRadius: figmaTheme.borderRadius,
    fontSize: figmaTheme.fontSize,
    fontWeight: figmaTheme.fontWeight,
    lineHeight: figmaTheme.lineHeight,
    fontFamily: figmaTheme.fontFamily,
    boxShadow: figmaTheme.boxShadow,
  },
  plugins: [],
}
