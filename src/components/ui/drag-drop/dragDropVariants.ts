import { cva, type VariantProps } from 'class-variance-authority'
import styles from './DragDrop.module.css'

export const dragDropVariants = cva(styles.dragDrop, {
  variants: {
    state: {
      default: styles['state-default'],
      hover: styles['state-hover'],
    },
    disabled: {
      true: styles['state-disabled'],
      false: '',
    },
  },
  defaultVariants: {
    state: 'default',
    disabled: false,
  },
})

export type DragDropVariants = VariantProps<typeof dragDropVariants>
