import { Container, Text, Col, Anchor, Spacer, Row, Brand } from '$components'
import { NAV_ROUTES, SOCIALS } from '$constants'

export const Footer: React.FC = () => {
  return (
    <footer className='border-t'>
      <Spacer size='sm'>
        <Container>
          <Col align='stretch'>
            <Row justify='between'>
              <Col gap='sm' className='max-w-md'>
                <Brand />
                <Text>
                  Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                  sint cillum sint consectetur cupidatat.
                </Text>
              </Col>

              <Col gap='sm'>
                <Text variant='h6'>Pages</Text>
                {NAV_ROUTES.map((route) => (
                  <Anchor href={route.href} key={route.label}>{route.label}</Anchor>
                ))}
              </Col>

              <Col gap='sm'>
                <Text variant='h6'>Socials</Text>
                {SOCIALS.map((social) => (
                  <Anchor href={social.href} newTab icon={social.icon} key={social.name}>
                    {social.name}
                  </Anchor>
                ))}
              </Col>
            </Row>
            <Text align='center'>
              <Anchor href='https://raymondkneipp.com' newTab>
                Website by Raymond Kneipp
              </Anchor>
            </Text>
          </Col>
        </Container>
      </Spacer>
    </footer>
  )
}
