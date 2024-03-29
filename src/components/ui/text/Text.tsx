import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const text = cva('text-base', {
  variants: {
    variant: {
      h1: 'font-heading text-5xl',
      h2: 'font-heading text-4xl',
      h3: 'font-heading text-3xl',
      h4: 'font-heading text-2xl',
      h5: 'font-heading text-xl',
      h6: 'font-heading text-lg',
      p: 'font-sans',
      span: 'font-sans',
    },
    intent: {
      default: 'text-black',
      primary: 'text-primary',
      light: 'text-white',
    },
    align: {
      start: 'text-start',
      center: 'text-center',
      end: 'text-end',
      justify: 'text-justify',
    },
    clamp: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'start',
    intent: 'default',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof text> {
  children: React.ReactNode
  element?: VariantProps<typeof text>['variant']
}

export const Text: React.FC<TextProps> = ({
  className,
  variant = 'p',
  children,
  align,
  clamp,
  intent,
  element = variant,
  ...props
}) => {
  return React.createElement(
    element || 'p',
    { className: text({ className, intent, clamp, variant, align }), ...props },
    children
  )
}
