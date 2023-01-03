import { cva, type VariantProps } from 'class-variance-authority'
import type { IconType } from 'react-icons'

export * from './Button'
export * from './ButtonLink'

export interface CommonButtonProps extends VariantProps<typeof button> {
  icon?: IconType
}

export const button = cva(
  'rounded-xl font-bold inline-flex items-center hover:brightness-125 transition text-center justify-center',
  {
    variants: {
      intent: {
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-violet-600 text-white',
        danger: 'bg-red-600 text-white',
        success: 'bg-emerald-600 text-white',
        light: 'bg-white text-blue-600',
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
