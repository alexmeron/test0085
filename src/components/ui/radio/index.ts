import { cva, type VariantProps } from 'class-variance-authority'

export { default as RadioGroup } from './RadioGroup.vue'
export { default as RadioGroupItem } from './RadioGroupItem.vue'

export const radioVariants = cva(
  'aspect-square rounded-full border text-brand-text-on-solid ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-brand-border-strong text-brand-solid-default',
        secondary: 'border-secondary-border-subtle text-secondary-solid-default',
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

export type RadioVariants = VariantProps<typeof radioVariants>
