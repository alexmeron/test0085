import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Dropdown.module.css'

export const dropdownItemVariants = cva(styles.item, {
  variants: {
    size: {
      big: styles['size-big'],
      small: styles['size-small'],
    },
    state: {
      default: styles['state-default'],
      hovered: styles['state-hovered'],
      selected: styles['state-selected'],
      'selected+hovered': styles['state-selectedHovered'],
      disabled: styles['state-disabled'],
    },
  },
  defaultVariants: {
    size: 'big',
    state: 'default',
  },
})

export type DropdownItemVariants = VariantProps<typeof dropdownItemVariants>
