import { cva, type VariantProps } from 'class-variance-authority'

export { default as RadioGroup } from './RadioGroup.vue'
export { default as RadioGroupItem } from './RadioGroupItem.vue'

export const radioVariants = cva(
  'aspect-square h-4 w-4 rounded-full border border-brand-border-strong text-brand-solid-default ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-brand-border-strong text-brand-solid-default',
        secondary: 'border-secondary-border-subtle text-secondary-solid-default',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)

export type RadioVariants = VariantProps<typeof radioVariants>
