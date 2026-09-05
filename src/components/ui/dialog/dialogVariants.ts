import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Dialog.module.css'

export const dialogVariants = cva(styles.panel, {
  variants: {
    mode: {
      dialog: styles['mode-dialog'],
      drawer: styles['mode-drawer'],
    },
  },
  defaultVariants: {
    mode: 'dialog',
  },
})

export type DialogVariants = VariantProps<typeof dialogVariants>
