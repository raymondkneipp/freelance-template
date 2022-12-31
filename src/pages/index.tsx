import { Container, Text } from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })
  console.log(hello.data)

  return (
    <>
      <Container>
        <Text variant="h1">hello</Text>
        <Text variant="h2">hello</Text>
        <Text variant="h3">hello</Text>
        <Text variant="h4">hello</Text>
        <Text variant="h5">hello</Text>
        <Text variant="h6">hello</Text>
        <Text variant="p">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Container>
    </>
  )
}

export default Home
