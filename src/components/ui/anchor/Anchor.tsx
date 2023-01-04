import React from "react"
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import type { IconType } from 'react-icons'

const anchor = cva('underline underline-offset-2 transition inline-flex items-center gap-2', {
  variants: {
    intent: {
      primary: 'text-primary decoration-primary/25 hover:decoration-primary',
      default: 'text-inherit decoration-black/25 hover:decoration-black',
    },
  },
  defaultVariants: {
    intent: 'default',
  },
})

export interface AnchorProps
  extends Omit<React.ComponentPropsWithoutRef<'a'>, 'target'>,
    VariantProps<typeof anchor> {
  children: React.ReactNode
  newTab?: boolean
  icon?: IconType
}

export const Anchor: React.FC<AnchorProps> = ({
  className,
  intent,
  href = '/',
  newTab = false,
  children,
  icon,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={anchor({ className, intent })}
      {...props}
      target={newTab ? '_blank' : '_self'}
    >
      {icon && React.createElement(icon, { className: '' })}
      {children}
    </Link>
  )
}
