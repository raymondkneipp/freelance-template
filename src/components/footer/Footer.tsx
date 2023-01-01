import { Container, Text, Col, Anchor } from '$components'
import {NAV_ROUTES} from "$constants"

export const Footer: React.FC = () => {
  return (
    <footer className='border-t py-8'>
      <Container>
        <Text variant='h5'>Footer</Text>

          <Col gap="sm">
            <Text variant="h6">Pages</Text>
            {NAV_ROUTES.map((route) => (
              <Anchor href={route.href}>{route.label}</Anchor>
            ))}
          </Col>
      </Container>
    </footer>
  )
}
