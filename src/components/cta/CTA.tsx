import { Spacer, Container, Text, Col, ButtonLink } from '$components'
import { CONTACT } from '$constants'
import { FaPhoneAlt } from 'react-icons/fa'

export const CTA: React.FC = () => {
  return (
    <Spacer size='md' className='bg-red-300'>
      <Container size='sm'>
        <Col align='center'>
          <Text variant='h2' align='center'>
            Give Us A Call Today!
          </Text>
          <Text align='center'>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </Text>
          <ButtonLink href={CONTACT.href} size='lg' icon={FaPhoneAlt}>
            {CONTACT.label}
          </ButtonLink>
        </Col>
      </Container>
    </Spacer>
  )
}
