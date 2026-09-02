import { cva, type VariantProps } from 'class-variance-authority'

export { default as Checkbox } from './Checkbox.vue'

export const checkboxVariants = cva(
  'peer shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-brand-border-strong data-[state=checked]:bg-brand-solid-default data-[state=checked]:text-brand-text-on-solid data-[state=indeterminate]:bg-brand-solid-default',
        secondary: 'border-secondary-border-subtle data-[state=checked]:bg-secondary-solid-default data-[state=checked]:text-secondary-text-on-solid',
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

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
