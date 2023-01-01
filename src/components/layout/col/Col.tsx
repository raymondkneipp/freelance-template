import { cva, type VariantProps } from 'class-variance-authority'

const col = cva('flex flex-col items-start', {
  variants: {
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-8',
    },
    align: {
      start: "items-start",
      center: "items-center",
      stretch: "items-stretch",
      end: "items-end"
    }
  },
  defaultVariants: {
    gap: 'md',
    align: 'start'
  },
})

export interface ColProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof col> {
  children: React.ReactNode
}

export const Col: React.FC<ColProps> = ({ gap, align, children, className }) => {
  return <div className={col({ gap, align, className })}>{children}</div>
}
