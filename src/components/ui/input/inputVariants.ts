import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Input.module.css'

export const inputVariants = cva(styles.input, {
  variants: {
    variant: {
      default: styles['variant-default'],
      error: styles['variant-error'],
      success: styles['variant-success'],
    },
    size: {
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export type InputVariants = VariantProps<typeof inputVariants>
