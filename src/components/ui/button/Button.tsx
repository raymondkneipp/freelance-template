import React from 'react'

import { CommonButtonProps, button } from './index'

export interface ButtonProps
  extends CommonButtonProps,
    React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  fullWidth,
  icon,
  children,
  ...props
}) => {
  return (
    <button
      className={button({ className, intent, size, fullWidth })}
      {...props}
    >
      <>
        {icon && React.createElement(icon, { className: '' })}
        {children}
      </>
    </button>
  )
}
