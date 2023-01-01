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
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly"
    }
  },
  defaultVariants: {
    gap: 'md',
    align: 'start',
    justify: 'start'
  },
})

export interface ColProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof col> {
  children: React.ReactNode
}

export const Col: React.FC<ColProps> = ({ gap, align, justify, children, className }) => {
  return <div className={col({ gap, align, justify, className })}>{children}</div>
}
