import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const spacer = cva('flex items-center', {
  variants: {
    size: {
      sm: 'py-8',
      default: 'py-12',
      screen: 'min-h-screen py-24',
    },
  },
  defaultVariants: {
    size: 'default',
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
