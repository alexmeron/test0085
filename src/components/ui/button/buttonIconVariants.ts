import { cva, type VariantProps } from 'class-variance-authority'

// Token mapping — Figma → CSS var → Tailwind utility
//
// ButtonIcon is a square icon-only button.
// Same color variants as Button. No text. No gap needed.
//
// SIZE: sm  (24×24, p=4 → spacing/spacing-3)
//   h/w: sizing/sizing-9  → h-sizing-9 w-sizing-9
//   p:   spacing/spacing-3 → p-spacing-3
//
// SIZE: md  (32×32, p=8 → spacing/spacing-5)
//   h/w: sizing/sizing-10 → h-sizing-10 w-sizing-10
//   p:   spacing/spacing-5 → p-spacing-5
//
// SIZE: lg  (40×40, p=10 → spacing/spacing-5-5)
//   h/w: sizing/sizing-11 → h-sizing-11 w-sizing-11
//   p:   spacing/spacing-5-5 → p-spacing-5-5
//
// radius: radius/radius-lg → rounded-radius-lg
//
// on-inverse variant uses color/secondary/solid/default (different from Button's color/surface/default)

export const buttonIconVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-radius-lg',  // radius/radius-lg
    'ring-offset-surface-default',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-solid-default',
          'text-brand-text-on-solid',
          'hover:bg-brand-solid-hover',
          'active:bg-brand-solid-pressed',
        ].join(' '),
        secondary: [
          'bg-secondary-solid-default',
          'text-secondary-text-on-solid',
          'hover:bg-secondary-solid-hover',
          'active:bg-secondary-solid-pressed',
        ].join(' '),
        tertiary: [
          'bg-subtle-solid-default',
          'text-subtle-text-on-solid',
          'hover:bg-subtle-solid-hover',
          'active:bg-subtle-solid-pressed',
        ].join(' '),
        danger: [
          'bg-destructive-solid-default',
          'text-destructive-text-on-solid',
          'hover:bg-destructive-solid-hover',
          'active:bg-destructive-solid-pressed',
        ].join(' '),
        outlined: [
          'bg-transparent',
          'border border-subtle-border-default',
          'text-subtle-text-on-solid',
          'hover:bg-subtle-solid-hover',
          'active:bg-subtle-solid-pressed',
        ].join(' '),
        ghost: [
          'bg-transparent',
          'text-subtle-text-on-solid',
          'hover:bg-subtle-solid-hover',
          'active:bg-subtle-solid-pressed',
        ].join(' '),
        'on-inverse': [
          'bg-secondary-solid-default',   // color/secondary/solid/default (Figma BV for ButtonIcon on-inverse)
          'text-secondary-text-on-solid',
          'hover:bg-secondary-solid-hover',
          'active:bg-secondary-solid-pressed',
        ].join(' '),
      },
      size: {
        sm: [
          'h-sizing-9 w-sizing-9', // sizing/sizing-9 = 24px
          'p-spacing-3',           // spacing/spacing-3 = 4px
        ].join(' '),
        md: [
          'h-sizing-10 w-sizing-10', // sizing/sizing-10 = 32px
          'p-spacing-5',             // spacing/spacing-5 = 8px
        ].join(' '),
        lg: [
          'h-sizing-11 w-sizing-11', // sizing/sizing-11 = 40px
          'p-spacing-5-5',           // spacing/spacing-5-5 = 10px
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonIconVariants = VariantProps<typeof buttonIconVariants>
