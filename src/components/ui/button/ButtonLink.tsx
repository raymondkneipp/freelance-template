import React from 'react'
import Link from 'next/link'

import { CommonButtonProps, button } from './index'

export interface ButtonLinkProps
  extends CommonButtonProps,
    React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  intent,
  size,
  fullWidth,
  icon,
  href = '/',
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={button({ className, intent, size, fullWidth })}
      {...props}
    >
      <>
        {icon && React.createElement(icon, { className: '' })}
        {children}
      </>
    </Link>
  )
}
