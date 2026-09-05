import { cva, type VariantProps } from 'class-variance-authority'

// Token mapping — Figma → CSS var → Tailwind utility
//
// LAYOUT (all sizes)
//   gap:          spacing/spacing-3  → var(--spacing-3)  → gap-spacing-3
//   radius:       radius/radius-lg   → var(--radius-lg)  → rounded-radius-lg
//   font-family:  font-family/body   → var(--font-family-body)  → font-body
//   font-weight:  font-weight/regular → var(--font-weight-regular) → font-regular
//
// SIZE: sm  (h=24, pV=4→spacing/spacing-3, pH=8→spacing/spacing-5)
//   height:       sizing/sizing-9    → var(--sizing-9)   → h-sizing-9
//   padding-x:    spacing/spacing-5  → var(--spacing-5)  → px-spacing-5
//   padding-y:    spacing/spacing-3  → var(--spacing-3)  → py-spacing-3
//   font-size:    font-size/caption/big → var(--font-size-caption-big) → text-caption-big
//   line-height:  line-height/leading-16 → var(--leading-16) → leading-leading-16
//
// SIZE: md  (h=32, pV=6→spacing/spacing-4, pH=8→spacing/spacing-5)
//   height:       sizing/sizing-10   → var(--sizing-10)  → h-sizing-10
//   padding-x:    spacing/spacing-5  → var(--spacing-5)  → px-spacing-5
//   padding-y:    spacing/spacing-4  → var(--spacing-4)  → py-spacing-4
//   font-size:    font-size/text/small → var(--font-size-text-small) → text-text-small
//   line-height:  line-height/leading-20 → var(--leading-20) → leading-leading-20
//
// SIZE: lg  (h=40, pV=10→spacing/spacing-5-5, pH=12→spacing/spacing-6)
//   height:       sizing/sizing-11   → var(--sizing-11)  → h-sizing-11
//   padding-x:    spacing/spacing-6  → var(--spacing-6)  → px-spacing-6
//   padding-y:    spacing/spacing-5-5 → var(--spacing-5-5) → py-spacing-5-5
//   font-size:    font-size/text/small → var(--font-size-text-small) → text-text-small
//   line-height:  line-height/leading-20 → var(--leading-20) → leading-leading-20
//
// COLORS per variant (default state bg / text):
//   primary:     color/brand/solid/default + color/brand/text/on-solid
//   secondary:   color/secondary/solid/default + color/secondary/text/on-solid
//   tertiary:    color/subtle/solid/default + color/subtle/text/on-solid
//   danger:      color/destructive/solid/default + color/destructive/text/on-solid
//   outlined:    transparent + color/subtle/text/on-solid, border: color/subtle/border/default
//   ghost:       transparent + color/subtle/text/on-solid
//   on-inverse:  color/surface/default + color/text/primary

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap',
    'gap-spacing-3',           // spacing/spacing-3
    'rounded-radius-lg',       // radius/radius-lg
    'font-body',               // font-family/body
    'font-regular',            // font-weight/regular
    'ring-offset-surface-default',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-solid-default',       // color/brand/solid/default
          'text-brand-text-on-solid',     // color/brand/text/on-solid
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
          'border border-subtle-border-default', // color/subtle/border/default
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
          'bg-surface-default',       // color/surface/default
          'text-text-primary',        // color/text/primary
          'hover:bg-surface-subtle',
          'active:bg-surface-muted',
        ].join(' '),
      },
      size: {
        sm: [
          'h-sizing-9',          // sizing/sizing-9 = 24px
          'px-spacing-5',        // spacing/spacing-5 = 8px
          'py-spacing-3',        // spacing/spacing-3 = 4px
          'text-caption-big',    // font-size/caption/big = 12px
          'leading-leading-16',  // line-height/leading-16 = 16px
        ].join(' '),
        md: [
          'h-sizing-10',         // sizing/sizing-10 = 32px
          'px-spacing-5',        // spacing/spacing-5 = 8px
          'py-spacing-4',        // spacing/spacing-4 = 6px
          'text-text-small',     // font-size/text/small = 14px
          'leading-leading-20',  // line-height/leading-20 = 20px
        ].join(' '),
        lg: [
          'h-sizing-11',         // sizing/sizing-11 = 40px
          'px-spacing-6',        // spacing/spacing-6 = 12px
          'py-spacing-5-5',      // spacing/spacing-5-5 = 10px
          'text-text-small',     // font-size/text/small = 14px
          'leading-leading-20',  // line-height/leading-20 = 20px
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
