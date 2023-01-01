import { Text, Container, Logo, Row, Anchor } from '$components'
import { NAV_ROUTES } from '$constants'
import { useRouter } from 'next/router'

export const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className='border-b py-8'>
      <Container>
        <Row align="center" justify="between">
          <Row align='center'>
            <Logo />
            <Text variant='h5' element='span'>
              Brand
            </Text>
          </Row>

          <Row gap="lg">
            {NAV_ROUTES.map((route) => (
              <Anchor href={route.href} intent={router.pathname === route.href ? "primary" : "default"}>{route.label}</Anchor>
            ))}
          </Row>
        </Row>
      </Container>
    </nav>
  )
}
