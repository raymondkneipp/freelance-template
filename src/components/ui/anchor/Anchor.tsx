import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

const anchor = cva('underline underline-offset-2 transition', {
  variants: {
    intent: {
      primary: 'text-blue-600 decoration-blue-200 hover:decoration-blue-600',
      secondary: 'text-violet-600 decoration-violet-200 hover:decoration-violet-600',
      default: 'text-inherit decoration-neutral-200 hover:decoration-black'
    },
  },
  defaultVariants: {
    intent: 'default'
  }
})

export interface AnchorProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof anchor> {
  children: React.ReactNode;
}

export const Anchor: React.FC<AnchorProps> = ({
  className,
  intent,
  href = '/',
  children,
  ...props
}) => {
  return (
    <Link href={href} className={anchor({ className, intent })} {...props}>{children}</Link>
  )
}
