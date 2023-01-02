import { cva, type VariantProps } from 'class-variance-authority'

const container = cva('mx-auto px-8', {
  variants: {
    maxWidth: {
      default: 'container',
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      xxl: 'max-w-screen-2xl',
      none: 'max-w-none'
    },
  },
  defaultVariants: {
    maxWidth: 'default',
  },
})

export interface ContainerProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof container> {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  className,
  maxWidth,
  children,
  ...props
}) => {
  return (
    <div className={container({ className, maxWidth })} {...props}>
      {children}
    </div>
  )
}
