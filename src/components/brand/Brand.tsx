import Link from 'next/link'
import { Text, Logo, Row } from '$components'
import { HOME } from '$constants'

export const Brand: React.FC = () => {
  return (
    <Link href={HOME.href}>
      <Row align='center'>
        <Logo />
        <Text variant='h5' element='span'>
          Business Name
        </Text>
      </Row>
    </Link>
  )
}
