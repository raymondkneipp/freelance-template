import { Text, Container, Logo, Row } from '$components'

export const NavBar: React.FC = () => {
  return (
    <nav className="border-b py-8">
      <Container>
        <Row align="center">
          <Logo />
          <Text variant='h5' element="span">Brand</Text>
        </Row>
      </Container>
    </nav>
  )
}
