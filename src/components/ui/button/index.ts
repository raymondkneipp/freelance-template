import { cva, type VariantProps } from 'class-variance-authority'
import type { IconType } from 'react-icons'

export * from './Button'
export * from './ButtonLink'

export interface CommonButtonProps extends VariantProps<typeof button> {
  icon?: IconType
}

export const button = cva(
  'font-bold inline-flex items-center hover:brightness-125 transition text-center justify-center',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        danger: 'bg-red-600 text-white',
        success: 'bg-emerald-600 text-white',
        light: 'bg-white text-primary',
      },
      size: {
        default: 'px-6 py-3 gap-3 text-base',
        lg: 'px-8 py-4 gap-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      size: 'default',
      intent: 'primary',
    },
  }
)
