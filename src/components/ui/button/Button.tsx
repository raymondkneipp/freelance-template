import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import type {IconType} from "react-icons"

const button = cva('rounded-xl font-bold uppercase inline-flex items-center', {
  variants: {
    intent: {
      primary: 'bg-emerald-400',
      secondary: 'bg-violet-400',
    },
    size: {
      sm: 'px-4 py-2 gap-2 text-sm',
      md: 'px-6 py-3 gap-3 text-base',
      lg: 'px-8 py-4 gap-4 text-lg'
    }
  },
  defaultVariants: {
    size: 'md',
    intent: 'primary'
  }
})

export interface ButtonProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  icon?: IconType;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  icon,
  href = '/',
  children,
  ...props
}) => {
  return (
    <Link href={href} className={button({ className, intent, size })} {...props}>
      <>
      {icon && React.createElement(icon, {className: ""})}
      {children}
      </>
    </Link>
  )
}
