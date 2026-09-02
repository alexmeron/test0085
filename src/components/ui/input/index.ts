import { cva, type VariantProps } from 'class-variance-authority'

export { default as Input } from './Input.vue'

export const inputVariants = cva(
  'flex w-full rounded-md border bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
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
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-4 text-lg',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'md',
    },
  }
)

export type InputVariants = VariantProps<typeof inputVariants>
