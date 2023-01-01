import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

const anchor = cva('underline underline-offset-2 transition', {
  variants: {
    intent: {
      primary: 'text-blue-600 decoration-blue-200 hover:decoration-blue-600',
      default: 'text-inherit decoration-neutral-200 hover:decoration-black',
    },
  },
  defaultVariants: {
    intent: 'default',
  },
})

export interface AnchorProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target'>,
    VariantProps<typeof anchor> {
  children: React.ReactNode
  newTab?: boolean
}

export const Anchor: React.FC<AnchorProps> = ({
  className,
  intent,
  href = '/',
  newTab = false,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={anchor({ className, intent })}
      {...props}
      target={newTab ? '_blank' : '_self'}
    >
      {children}
    </Link>
  )
}
