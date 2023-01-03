import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { IconType } from 'react-icons'

const iconCard = cva('flex gap-4', {
  variants: {
    stack: {
      true: 'flex-col',
      false: 'flex-row',
    },
  },
  defaultVariants: {
    stack: false,
  },
})

export interface IconCardProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof iconCard> {
  children: React.ReactNode
  icon: IconType
}

export const IconCard: React.FC<IconCardProps> = ({
  className,
  children,
  icon,
  stack,
  ...props
}) => {
  return (
    <div className={iconCard({ className, stack })} {...props}>
      <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600 p-4'>
        {icon &&
          React.createElement(icon, { className: 'text-white', size: 'auto' })}
      </div>
      <div>{children}</div>
    </div>
  )
}
