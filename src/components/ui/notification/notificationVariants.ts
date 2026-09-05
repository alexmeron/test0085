import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Notification.module.css'

export const notificationVariants = cva(styles.notification, {
  variants: {
    status: {
      default: styles['status-default'],
      success: styles['status-success'],
      warning: styles['status-warning'],
      destructive: styles['status-destructive'],
      info: styles['status-info'],
      ready: styles['status-ready'],
    },
    type: {
      muted: styles['type-muted'],
      solid: styles['type-solid'],
    },
  },
  defaultVariants: {
    status: 'default',
    type: 'muted',
  },
})

export type NotificationVariants = VariantProps<typeof notificationVariants>
