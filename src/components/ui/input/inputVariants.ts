import { cva, type VariantProps } from 'class-variance-authority'

export const inputVariants = cva(
  'flex w-full rounded-lg border bg-surface-default text-text-primary ring-offset-surface-default font-body file:border-0 file:bg-transparent file:text-text-medium file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border-default hover:border-border-strong',
        error: 'border-destructive-border-default focus-visible:ring-destructive-border-focus',
        success: 'border-brand-border-default focus-visible:ring-brand-border-focus',
      },
      size: {
        sm: 'h-sizing-9 px-5 py-3 text-caption-big',
        md: 'h-sizing-10 px-5 py-4 text-text-small',
        lg: 'h-sizing-11 px-6 py-5-5 text-text-small',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export type InputVariants = VariantProps<typeof inputVariants>
