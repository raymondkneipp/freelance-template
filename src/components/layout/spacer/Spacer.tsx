import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const spacer = cva('', {
  variants: {
    size: {
      sm: 'py-8',
      md: 'py-12',
      lg: 'min-h-screen py-24 flex items-center',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface SpacerProps
  extends React.ComponentPropsWithoutRef<'section'>,
    VariantProps<typeof spacer> {
  children: React.ReactNode
}

export const Spacer: React.FC<SpacerProps> = ({
  children,
  size,
  className,
}) => {
  return <section className={spacer({ className, size })}>{children}</section>
}
