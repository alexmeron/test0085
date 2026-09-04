import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import * as tailwindTheme from '../styles/tailwind-theme.js'

const figmaTheme = (tailwindTheme as any).figmaTheme || (tailwindTheme as any).default?.figmaTheme || {};

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: Object.keys(figmaTheme.fontSize || {}) }],
      'text-color': [{ text: Object.keys(figmaTheme.colors || {}) }],
      'bg-color': [{ bg: Object.keys(figmaTheme.colors || {}) }],
      'border-color': [{ border: Object.keys(figmaTheme.colors || {}) }],
      'rounded': [{ rounded: Object.keys(figmaTheme.borderRadius || {}) }],
      'p': [{ p: Object.keys(figmaTheme.spacing || {}) }],
      'px': [{ px: Object.keys(figmaTheme.spacing || {}) }],
      'py': [{ py: Object.keys(figmaTheme.spacing || {}) }],
      'w': [{ w: Object.keys(figmaTheme.spacing || {}) }],
      'h': [{ h: Object.keys(figmaTheme.spacing || {}) }],
      'font-family': [{ font: Object.keys(figmaTheme.fontFamily || {}) }],
      'font-weight': [{ font: Object.keys(figmaTheme.fontWeight || {}) }],
      'leading': [{ leading: Object.keys(figmaTheme.lineHeight || {}) }]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
