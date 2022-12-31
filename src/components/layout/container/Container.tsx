import { cva, type VariantProps } from 'class-variance-authority'

const container = cva('container mx-auto px-8', {
  variants: {}
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => {
  return <div className={container({className})} {...props}>{children}</div>
}
