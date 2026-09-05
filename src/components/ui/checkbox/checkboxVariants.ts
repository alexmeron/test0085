import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Checkbox.module.css'

export const checkboxVariants = cva(styles.checkbox, {
  variants: {
    variant: {
      primary: styles['variant-primary'],
      secondary: styles['variant-secondary'],
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

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
