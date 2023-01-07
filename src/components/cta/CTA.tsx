import { Divider, Spacer, Container, Text, Col, ButtonLink } from '$components'
import { CONTACT } from '$constants'
import { FaPhoneAlt } from 'react-icons/fa'

export const CTA: React.FC = () => {
  return (
    <>
      <Divider shape='tilt' bg='text-primary' flipVertical flipHorizontal />
      <Spacer className='relative bg-primary' size='sm'>
        <Container maxWidth='sm'>
          <Col align='center'>
            <Text variant='h2' align='center' intent='light'>
              Give Us A Call Today!
            </Text>
            <Text align='center' intent='light'>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
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
      <Divider shape='tilt' bg='text-primary' />
    </>
  )
}
