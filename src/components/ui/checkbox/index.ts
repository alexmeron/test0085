import { cva, type VariantProps } from 'class-variance-authority'

export { default as Checkbox } from './Checkbox.vue'

export const checkboxVariants = cva(
  'peer shrink-0 rounded-radius-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-brand-border-strong data-[state=checked]:bg-brand-solid-default data-[state=checked]:text-brand-text-on-solid data-[state=indeterminate]:bg-brand-solid-default',
        secondary: 'border-secondary-border-subtle data-[state=checked]:bg-secondary-solid-default data-[state=checked]:text-secondary-text-on-solid',
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
