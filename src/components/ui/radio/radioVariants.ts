import { cva, type VariantProps } from 'class-variance-authority'

// Token mapping — Figma → CSS var → Tailwind utility
//
// SHAPE
//   radius: radius/full → rounded-full
//
// SIZES (Figma token: Size/size-formControll-*)
//   sm: 14px — MISSING TOKEN: Size/size-formControll-sm not present in Foundations tokens
//              Using h-[14px] w-[14px] as fallback until token is added to Foundations
//   md: 16px → sizing/sizing-7 → h-sizing-7 w-sizing-7
//   lg: 20px → sizing/sizing-8 → h-sizing-8 w-sizing-8
//
// COLORS — Unchecked
//   bg:          color/surface/default → bg-surface-default
//   border:      color/border/strong   → border-border-strong
//   hover:       color/border/strong   → hover:border-border-strong
//
// COLORS — Checked Primary
//   border:      color/brand/solid/default → data-[state=checked]:border-brand-solid-default
//   hover:       color/brand/solid/hover   → hover:data-[state=checked]:border-brand-solid-hover
//   dot (text):  color/brand/solid/default → text-brand-solid-default
//   hover dot:   color/brand/solid/hover   → hover:text-brand-solid-hover
//
// COLORS — Checked Secondary
//   border:      color/secondary/solid/default → data-[state=checked]:border-secondary-solid-default
//   hover:       color/secondary/solid/hover   → hover:data-[state=checked]:border-secondary-solid-hover
//   dot (text):  color/secondary/solid/default → text-secondary-solid-default
//   hover dot:   color/secondary/solid/hover   → hover:text-secondary-solid-hover
//
// FOCUS RING
//   color/border/focus → ring-border-focus
//
// DISABLED
//   Opacity/disabled → opacity-50 + cursor-not-allowed

export const radioVariants = cva(
  [
    'peer aspect-square rounded-full border border-border-strong bg-surface-default',
    'flex items-center justify-center shrink-0',
    'ring-offset-surface-default transition-colors',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'data-[state=checked]:border-brand-solid-default data-[state=checked]:text-brand-solid-default',
          'hover:data-[state=checked]:border-brand-solid-hover hover:data-[state=checked]:text-brand-solid-hover',
        ].join(' '),
        secondary: [
          'data-[state=checked]:border-secondary-solid-default data-[state=checked]:text-secondary-solid-default',
          'hover:data-[state=checked]:border-secondary-solid-hover hover:data-[state=checked]:text-secondary-solid-hover',
        ].join(' '),
      },
      size: {
        // MISSING TOKEN: Size/size-formControll-sm (14px) not in Foundations tokens
        sm: 'h-[14px] w-[14px]',
        md: 'h-sizing-7 w-sizing-7', // sizing/sizing-7 = 16px
        lg: 'h-sizing-8 w-sizing-8', // sizing/sizing-8 = 20px
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type RadioVariants = VariantProps<typeof radioVariants>
