import { cva, type VariantProps } from 'class-variance-authority'
import styles from './ProgressBar.module.css'

export const progressBarVariants = cva(styles.container, {
  variants: {
    mode: {
      default: styles['mode-default'],
      inverse: styles['mode-inverse'],
    },
    state: {
      neutral: styles['state-neutral'],
      info: styles['state-info'],
      danger: styles['state-danger'],
      warning: styles['state-warning'],
      success: styles['state-success'],
    },
    label: {
      hidden: styles['layout-hidden'],
      right: styles['layout-right'],
      bottom: styles['layout-bottom'],
    },
  },
  defaultVariants: {
    mode: 'default',
    state: 'info',
    label: 'hidden',
  },
})

export type ProgressBarVariants = VariantProps<typeof progressBarVariants>
