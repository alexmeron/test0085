import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const shadows = {
  "xs": "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  "sm": "0px 1px 3px 0px rgba(0, 0, 0, 0.06), 0px 1px 2px 0px rgba(0, 0, 0, 0.1)",
  "md": "0px 4px 6px -2px rgba(0, 0, 0, 0.07), 0px 2px 4px -2px rgba(0, 0, 0, 0.12)",
  "lg": "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.12)",
  "xl": "0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.12)",
  "2xl": "0px 24px 48px -12px rgba(0, 0, 0, 0.18)"
}

const themeFile = path.join(__dirname, '../src/styles/tailwind-theme.js')
let content = fs.readFileSync(themeFile, 'utf8')

if (!content.includes('boxShadow')) {
  content = content.replace('fontFamily: {', 'boxShadow: ' + JSON.stringify(shadows, null, 4) + ',\n  fontFamily: {')
  fs.writeFileSync(themeFile, content)
}

const tailwindConfigFile = path.join(__dirname, '../tailwind.config.js')
let twContent = fs.readFileSync(tailwindConfigFile, 'utf8')
if (!twContent.includes('boxShadow:')) {
  twContent = twContent.replace('fontFamily: figmaTheme.fontFamily,', 'fontFamily: figmaTheme.fontFamily,\n      boxShadow: figmaTheme.boxShadow,')
  fs.writeFileSync(tailwindConfigFile, twContent)
}
