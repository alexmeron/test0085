import { cva, type VariantProps } from 'class-variance-authority'

export { default as Input } from './Input.vue'

export const inputVariants = cva(
  'flex w-full rounded-radius-lg border bg-transparent font-body shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      state: {
        default: 'border-border-default focus-visible:ring-border-focus',
        hover: 'border-border-strong hover:border-border-focus',
        focus: 'border-border-focus ring-1 ring-border-focus',
        filled: 'border-border-default bg-surface-subtle',
        disabled: 'border-border-disabled bg-surface-disabled text-text-disabled',
        success: 'border-success-border-default text-success-text-default focus-visible:ring-success-border-strong',
        destructive: 'border-destructive-border-default text-destructive-text-default focus-visible:ring-destructive-border-strong',
      },
      size: {
        sm: 'h-sizing-6 px-spacing-5 py-spacing-3 text-caption-big',
        md: 'h-sizing-8 px-spacing-5 py-spacing-4 text-text-small',
        lg: 'h-sizing-10 px-spacing-6 py-spacing-5-5 text-text-small',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'md',
    },
  }
)

export type InputVariants = VariantProps<typeof inputVariants>
