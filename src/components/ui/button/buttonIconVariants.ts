import { cva, type VariantProps } from 'class-variance-authority'

export const buttonIconVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-radius-lg ring-offset-surface-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-solid-default text-brand-text-on-solid hover:bg-brand-solid-hover active:bg-brand-solid-pressed',
        secondary: 'bg-secondary-solid-default text-secondary-text-on-solid hover:bg-secondary-solid-hover active:bg-secondary-solid-pressed',
        tertiary: 'bg-subtle-solid-default text-subtle-text-on-solid hover:bg-subtle-solid-hover active:bg-subtle-solid-pressed',
        danger: 'bg-destructive-solid-default text-destructive-text-on-solid hover:bg-destructive-solid-hover active:bg-destructive-solid-pressed',
        outlined: 'border border-border-default bg-transparent text-text-primary hover:bg-surface-subtle active:bg-surface-muted',
        ghost: 'bg-transparent text-text-primary hover:bg-surface-subtle active:bg-surface-muted',
        'on-inverse': 'bg-surface-inverse-default text-text-inverse-primary hover:bg-surface-inverse-subtle',
      },
      size: {
        sm: 'h-sizing-9 w-sizing-9 p-spacing-3',
        md: 'h-sizing-10 w-sizing-10 p-spacing-5',
        lg: 'h-sizing-11 w-sizing-11 p-spacing-5-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonIconVariants = VariantProps<typeof buttonIconVariants>
