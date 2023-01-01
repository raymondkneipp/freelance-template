import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const card = cva('border rounded-2xl p-8 flex-1 basis-full md:basis-1/3 lg:basis-1/4', {
  variants: {
    size: {
      sm: 'p-4',
      md: 'p-8',
      lg: 'p-12',
    }
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  children: React.ReactNode
  image?: string
}

export const Card: React.FC<CardProps> = ({ image, children, size, className }) => {
  return (
    <div className={card({ className, size })}>
      {image && <Image src={image} width={500} height={300} alt="idk" />}
      {children}
    </div>
  )
}
