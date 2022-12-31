import { Container, Text, Button } from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'
import {FaBeer, FaHome, FaBell} from "react-icons/fa"

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
        <Button>hello</Button>
        <Button size="sm">hello</Button>
        <Button size="md">hello</Button>
        <Button size="lg">hello</Button>
        <Button size="sm" intent="secondary">hello</Button>
        <Button size="md" intent="secondary">hello</Button>
        <Button size="lg" intent="secondary">hello</Button>
        <Button size="sm" icon={FaBeer}>hello</Button>
        <Button size="md" icon={FaHome}>hello</Button>
        <Button size="lg" icon={FaBell}>hello</Button>
        <Button size="sm" intent="secondary" icon={FaBeer}>hello</Button>
        <Button size="md" intent="secondary" icon={FaHome}>hello</Button>
        <Button size="lg" intent="secondary" icon={FaBell}>hello</Button>
      </Container>
    </>
  )
}

export default Home
