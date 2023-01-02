import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const card = cva('', {
  variants: {
    size: {
      sm: 'p-4',
      md: 'p-8',
      lg: 'p-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  children: React.ReactNode
  image?: {
    src: string
    alt: string
  }
}

export const Card: React.FC<CardProps> = ({
  image,
  children,
  size,
  className,
}) => {
  return (
    <div className='flex-1 basis-full overflow-hidden rounded-2xl border md:basis-1/3 lg:basis-1/4'>
      {image && (
        <Image
          src={image.src}
          width={500}
          height={300}
          alt={image.alt}
          className='w-full'
        />
      )}
      <div className={card({ size, className })}>{children}</div>
    </div>
  )
}
