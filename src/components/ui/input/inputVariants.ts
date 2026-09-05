import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Input.module.css'

export const inputVariants = cva(styles.inputField, {
  variants: {
    size: {
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
    },
    state: {
      default: '',
      hover: styles['state-hover'],
      focus: styles['state-focus'],
      filled: '',
      disabled: styles.disabled,
      success: styles['state-success'],
      destructive: styles['state-destructive'],
    },
    variant: {
      default: '',
      error: styles['state-destructive'],
      success: styles['state-success'],
    },
  },
  defaultVariants: {
    size: 'md',
    state: 'default',
  },
})

export type InputVariants = VariantProps<typeof inputVariants>
