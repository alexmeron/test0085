import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Tabs.module.css'

export const tabTriggerVariants = cva(styles.trigger, {
  variants: {
    state: {
      default: styles['state-default'],
      hover: styles['state-hover'],
      pressed: styles['state-pressed'],
      focus: styles['state-focus'],
      current: styles['state-current'],
    },
  },
  defaultVariants: {
    state: 'default',
  },
})

export type TabTriggerVariants = VariantProps<typeof tabTriggerVariants>
