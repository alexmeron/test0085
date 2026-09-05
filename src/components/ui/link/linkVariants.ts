import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Link.module.css'

export const linkVariants = cva(styles.link, {
  variants: {
    variant: {
      brand: styles['variant-brand'],
      secondary: styles['variant-secondary'],
      subtle: styles['variant-subtle'],
      danger: styles['variant-danger'],
      success: styles['variant-success'],
      ready: styles['variant-ready'],
    },
    size: {
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
    },
    state: {
      default: styles['state-default'],
      hover: styles['state-hover'],
      pressed: styles['state-pressed'],
      focus: styles['state-focus'],
      disabled: styles['state-disabled'],
    },
  },
  defaultVariants: {
    variant: 'brand',
    size: 'sm',
  },
})

export type LinkVariants = VariantProps<typeof linkVariants>
