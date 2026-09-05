import { cva, type VariantProps } from 'class-variance-authority'

export const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full bg-surface-muted text-text-primary font-medium font-body',
  {
    variants: {
      size: {
        sm: 'h-sizing-9 w-sizing-9 text-caption-medium leading-14',
        md: 'h-sizing-10 w-sizing-10 text-caption-big leading-16',
        lg: 'h-sizing-11 w-sizing-11 text-text-medium leading-24',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type AvatarVariants = VariantProps<typeof avatarVariants>
