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
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

// TODO: possible generics HTMLParagraphElement, HTMLHeadingElement, etc.
export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof text> {
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  className,
  variant = 'p',
  children,
  ...props
}) => {
  if (variant === null) {
    variant = 'p'
  }

  return React.createElement(
    variant,
    { className: text({ className, variant }), ...props },
    children
  )
}
