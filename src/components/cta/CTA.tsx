import { Spacer, Container, Text, Col, ButtonLink } from '$components'
import { CONTACT } from '$constants'
import { FaPhoneAlt } from 'react-icons/fa'

export const CTA: React.FC = () => {
  return (
    <Spacer className='bg-emerald-700'>
      <Container maxWidth='sm'>
        <Col align='center'>
          <Text variant='h2' align='center' intent='light'>
            Give Us A Call Today!
          </Text>
          <Text align='center' intent='light'>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </Text>
          <ButtonLink
            href={CONTACT.href}
            size='lg'
            icon={FaPhoneAlt}
            intent='light'
          >
            {CONTACT.label}
          </ButtonLink>
        </Col>
      </Container>
    </Spacer>
  )
}
