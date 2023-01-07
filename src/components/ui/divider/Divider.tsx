import { cva, type VariantProps } from 'class-variance-authority'
import { Wave, Waves, Tilt } from './shapes'

const divider = cva(
  'relative bottom-0 left-0 w-full overflow-hidden leading-[0]',
  {
    variants: {
      flipHorizontal: {
        true: 'scale-x-[-1]',
      },
      flipVertical: {
        true: 'scale-y-[-1]',
      },
    },
  }
)

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divider> {
  shape?: 'wave' | 'waves' | 'tilt'
  bg?: string
}

export const Divider: React.FC<DividerProps> = ({
  className,
  flipHorizontal,
  flipVertical,
  bg,
  shape,
}) => {
  return (
    <div className={divider({ className, flipHorizontal, flipVertical })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        preserveAspectRatio='none'
        viewBox='0 0 1200 120'
        className={`relative block h-14 w-[calc(100%+3px)] sm:h-20 md:h-28 lg:h-32 xl:h-36 ${bg}`}
      >
        {shape === 'wave' && <Wave />}
        {shape === 'waves' && <Waves />}
        {shape === 'tilt' && <Tilt />}
      </svg>
    </div>
  )
}
