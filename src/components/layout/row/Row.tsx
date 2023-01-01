import { cva, type VariantProps } from 'class-variance-authority'

const row = cva('flex flex-row items-start flex-wrap', {
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

export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof row> {
  children: React.ReactNode
}

export const Row: React.FC<RowProps> = ({ gap, align, justify, children, className }) => {
  return <div className={row({ gap, align, justify, className })}>{children}</div>
}
