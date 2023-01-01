import { Text, Container } from '$components'

export const NavBar: React.FC = () => {
  return (
    <nav>
      <Container>
        <Text variant='h6' element="span">Brand</Text>
      </Container>
    </nav>
  )
}
