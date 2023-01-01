import { cva, type VariantProps } from 'class-variance-authority'

const row = cva('flex flex-row items-start', {
  variants: {
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-8',
    },
  },
  defaultVariants: {
    gap: 'md',
  },
})

export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof row> {
  children: React.ReactNode
}

export const Row: React.FC<RowProps> = ({ gap, children, className }) => {
  return <div className={row({ gap, className })}>{children}</div>
}
