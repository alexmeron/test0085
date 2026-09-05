import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Avatar.module.css'

export const avatarVariants = cva(styles.avatar, {
  variants: {
    size: {
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type AvatarVariants = VariantProps<typeof avatarVariants>
