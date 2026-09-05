import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Button.module.css'

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles['variant-primary'],
      secondary: styles['variant-secondary'],
      tertiary: styles['variant-tertiary'],
      danger: styles['variant-danger'],
      outlined: styles['variant-outlined'],
      ghost: styles['variant-ghost'],
      'on-inverse': styles['variant-on-inverse'],
    },
    size: {
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
