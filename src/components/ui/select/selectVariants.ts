import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Select.module.css'

export const selectVariants = cva(styles.inputField, {
  variants: {
    size: {
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
    },
    state: {
      default: styles['state-default'],
      hover: styles['state-hover'],
      focus: styles['state-focus'],
      filled: styles['state-filled'],
      opened: styles['state-opened'],
      disabled: styles['state-disabled'],
      success: styles['state-success'],
      destructive: styles['state-destructive'],
    },
  },
  defaultVariants: {
    size: 'md',
    state: 'default',
  },
})

export type SelectVariants = VariantProps<typeof selectVariants>
