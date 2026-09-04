import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-spacing-3 whitespace-nowrap rounded-radius-lg font-regular font-body ring-offset-surface-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-border-default focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
        sm: 'h-sizing-9 px-spacing-5 py-spacing-3 text-caption-big leading-leading-16',
        md: 'h-sizing-10 px-spacing-5 py-spacing-4 text-text-small leading-leading-20',
        lg: 'h-sizing-11 px-spacing-6 py-spacing-5-5 text-text-small leading-leading-20',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
