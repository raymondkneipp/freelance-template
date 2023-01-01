import { cva, type VariantProps } from 'class-variance-authority'

const col = cva('flex flex-col items-start', {
  variants: {
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
    }
  },
  defaultVariants: {
    gap: "md"
  }
})

export interface ColProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof col> {
  children: React.ReactNode
}

export const Col: React.FC<ColProps> = ({ gap, children, className }) => {
  return <div className={col({ gap, className })}>{children}</div>
}
