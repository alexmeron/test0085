import { cva, type VariantProps } from 'class-variance-authority'
import styles from './Chip.module.css'

export const chipVariants = cva(styles.chip, {
  variants: {
    state: {
      destructive: '',
      info: '',
      ready: '',
      warning: '',
      success: '',
      neutral: '',
      ended: '',
    },
    variant: {
      subtle: '',
      solid: '',
      outline: '',
      ghost: '',
    },
    size: {
      badge: styles['size-badge'],
      xs: styles['size-xs'],
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
    },
  },
  compoundVariants: [
    // Destructive
    { state: 'destructive', variant: 'subtle', class: styles['state-destructive-subtle'] },
    { state: 'destructive', variant: 'solid', class: styles['state-destructive-solid'] },
    { state: 'destructive', variant: 'outline', class: styles['state-destructive-outline'] },
    { state: 'destructive', variant: 'ghost', class: styles['state-destructive-ghost'] },

    // Info
    { state: 'info', variant: 'subtle', class: styles['state-info-subtle'] },
    { state: 'info', variant: 'solid', class: styles['state-info-solid'] },
    { state: 'info', variant: 'outline', class: styles['state-info-outline'] },
    { state: 'info', variant: 'ghost', class: styles['state-info-ghost'] },

    // Ready
    { state: 'ready', variant: 'subtle', class: styles['state-ready-subtle'] },
    { state: 'ready', variant: 'solid', class: styles['state-ready-solid'] },
    { state: 'ready', variant: 'outline', class: styles['state-ready-outline'] },
    { state: 'ready', variant: 'ghost', class: styles['state-ready-ghost'] },

    // Warning
    { state: 'warning', variant: 'subtle', class: styles['state-warning-subtle'] },
    { state: 'warning', variant: 'solid', class: styles['state-warning-solid'] },
    { state: 'warning', variant: 'outline', class: styles['state-warning-outline'] },
    { state: 'warning', variant: 'ghost', class: styles['state-warning-ghost'] },

    // Success
    { state: 'success', variant: 'subtle', class: styles['state-success-subtle'] },
    { state: 'success', variant: 'solid', class: styles['state-success-solid'] },
    { state: 'success', variant: 'outline', class: styles['state-success-outline'] },
    { state: 'success', variant: 'ghost', class: styles['state-success-ghost'] },

    // Neutral
    { state: 'neutral', variant: 'subtle', class: styles['state-neutral-subtle'] },
    { state: 'neutral', variant: 'solid', class: styles['state-neutral-solid'] },
    { state: 'neutral', variant: 'outline', class: styles['state-neutral-outline'] },
    { state: 'neutral', variant: 'ghost', class: styles['state-neutral-ghost'] },

    // Ended
    { state: 'ended', variant: 'subtle', class: styles['state-ended-subtle'] },
    { state: 'ended', variant: 'solid', class: styles['state-ended-solid'] },
    { state: 'ended', variant: 'outline', class: styles['state-ended-outline'] },
    { state: 'ended', variant: 'ghost', class: styles['state-ended-ghost'] },
  ],
  defaultVariants: {
    state: 'neutral',
    variant: 'subtle',
    size: 'md',
  },
})

export type ChipVariants = VariantProps<typeof chipVariants>
