import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const card = cva('p-8', {
  variants: {},
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

export const Card: React.FC<CardProps> = ({ image, children, className }) => {
  return (
    <div className='overflow-hidden border'>
      {image && (
        <Image
          src={image.src}
          width={500}
          height={300}
          alt={image.alt}
          className='w-full'
        />
      )}
      <div className={card({ className })}>{children}</div>
    </div>
  )
}
