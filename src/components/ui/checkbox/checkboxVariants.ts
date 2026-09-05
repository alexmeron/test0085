import { cva, type VariantProps } from 'class-variance-authority'

// Token mapping — Figma → CSS var → Tailwind utility
//
// SHAPE
//   radius: radius/radius-sm → --radius-sm → rounded-radius-sm
//
// SIZES (Figma token: Size/size-formControll-*)
//   sm: 14px — MISSING TOKEN: Size/size-formControll-sm not present in Foundations tokens
//              Using h-[14px] w-[14px] as fallback until token is added to Foundations
//   md: 16px → sizing/sizing-7 → h-sizing-7 w-sizing-7
//   lg: 20px → sizing/sizing-8 → h-sizing-8 w-sizing-8
//
// COLORS — Unchecked
//   bg:          color/surface/default → bg-surface-default
//   border:      color/border/default  → border-border-default
//   hover:       color/border/strong   → hover:border-border-strong
//
// COLORS — Checked / Indeterminate, primary
//   default bg:  color/brand/solid/default → bg-brand-solid-default
//   default bdr: color/brand/solid/default → border-brand-solid-default
//   icon:        color/brand/text/on-solid → text-brand-text-on-solid
//   hover:       color/brand/solid/hover   → hover:bg-brand-solid-hover hover:border-brand-solid-hover
//
// COLORS — Checked / Indeterminate, secondary
//   default bg:  color/secondary/solid/default → bg-secondary-solid-default
//   default bdr: color/secondary/solid/default → border-secondary-solid-default
//   icon:        color/secondary/text/on-solid → text-secondary-text-on-solid
//   hover:       color/secondary/solid/hover   → hover:bg-secondary-solid-hover hover:border-secondary-solid-hover
//
// FOCUS RING
//   color/border/focus → ring-border-focus
//
// DISABLED
//   Opacity/disabled → opacity-50 + cursor-not-allowed

export const checkboxVariants = cva(
  [
    'peer shrink-0 flex items-center justify-center',
    'rounded-radius-sm',
    'border border-border-default',
    'bg-surface-default',
    'ring-offset-surface-default',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'hover:border-border-strong',
          // checked
          'data-[state=checked]:bg-brand-solid-default',
          'data-[state=checked]:border-brand-solid-default',
          'data-[state=checked]:text-brand-text-on-solid',
          'hover:data-[state=checked]:bg-brand-solid-hover',
          'hover:data-[state=checked]:border-brand-solid-hover',
          // indeterminate
          'data-[state=indeterminate]:bg-brand-solid-default',
          'data-[state=indeterminate]:border-brand-solid-default',
          'data-[state=indeterminate]:text-brand-text-on-solid',
          'hover:data-[state=indeterminate]:bg-brand-solid-hover',
          'hover:data-[state=indeterminate]:border-brand-solid-hover',
        ].join(' '),
        secondary: [
          'hover:border-border-strong',
          // checked
          'data-[state=checked]:bg-secondary-solid-default',
          'data-[state=checked]:border-secondary-solid-default',
          'data-[state=checked]:text-secondary-text-on-solid',
          'hover:data-[state=checked]:bg-secondary-solid-hover',
          'hover:data-[state=checked]:border-secondary-solid-hover',
          // indeterminate
          'data-[state=indeterminate]:bg-secondary-solid-default',
          'data-[state=indeterminate]:border-secondary-solid-default',
          'data-[state=indeterminate]:text-secondary-text-on-solid',
          'hover:data-[state=indeterminate]:bg-secondary-solid-hover',
          'hover:data-[state=indeterminate]:border-secondary-solid-hover',
        ].join(' '),
      },
      size: {
        sm: 'h-[14px] w-[14px]',
        md: 'h-sizing-7 w-sizing-7',
        lg: 'h-sizing-8 w-sizing-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
