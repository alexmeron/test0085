import { cva, type VariantProps } from 'class-variance-authority'
import styles from './RadioGroup.module.css'

export const radioVariants = cva(styles.item, {
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

export type RadioVariants = VariantProps<typeof radioVariants>
