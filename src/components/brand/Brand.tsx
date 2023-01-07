import Link from 'next/link'
import { Text, Logo } from '$components'
import { HOME } from '$constants'

export const Brand: React.FC = () => {
  return (
    <Link href={HOME.href} className='flex items-center gap-4 flex-wrap'>
      <Logo />
      <Text variant='h5' element='span'>
        Brand
      </Text>
    </Link>
  )
}
