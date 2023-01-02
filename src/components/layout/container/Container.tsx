import { cva, type VariantProps } from 'class-variance-authority'

const container = cva('mx-auto px-8', {
  variants: {
    size: {
      sm: 'container max-w-screen-sm',
      md: 'container',
      lg: 'w-full',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface ContainerProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof container> {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  className,
  size,
  children,
  ...props
}) => {
  return (
    <div className={container({ className, size })} {...props}>
      {children}
    </div>
  )
}
