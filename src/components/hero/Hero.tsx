import { Container, Text, ButtonLink, Col, Row, Spacer } from '$components'
import { CONTACT, SERVICES } from '$constants'
import { HiCog, HiPhone } from 'react-icons/hi2'

export const Hero: React.FC = () => {
  return (
    <>
      <Spacer size='screen' className='bg-neutral-700'>
        <Container maxWidth='md' className='mt-28'>
          <Col align='center'>
            <Text variant='h1' intent='light' align='center'>
              A Great Tagline Goes Here!
            </Text>
            <Text intent='light' align='center'>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            </Text>

            <Row align='center' justify='center'>
              <ButtonLink
                href={CONTACT.href}
                intent='primary'
                size='lg'
                icon={HiPhone}
              >
                {CONTACT.label}
              </ButtonLink>
              <ButtonLink
                href={SERVICES.href}
                intent='secondary'
                size='lg'
                icon={HiCog}
              >
                {SERVICES.label}
              </ButtonLink>
            </Row>
          </Col>
        </Container>
      </Spacer>
    </>
  )
}
