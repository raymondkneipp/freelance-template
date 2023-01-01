import { Container } from '$components'
import { cva, type VariantProps } from 'class-variance-authority'

const full = cva('flex min-h-screen items-center', {
  variants: {},
})

export interface FullProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof full> {
  children: React.ReactNode
}

export const Full: React.FC<FullProps> = ({ children, className }) => {
  return (
    <div className={full({ className })}>
      <Container>{children}</Container>
    </div>
  )
}
