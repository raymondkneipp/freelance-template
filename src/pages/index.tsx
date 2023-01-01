import { Container, Text, Button, Col } from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'
import { FaBell } from 'react-icons/fa'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })
  console.log(hello.data)

  return (
    <>
      <Container>
        <Text variant='h1'>Hello</Text>
        <Text variant='h2'>Hello</Text>
        <Text variant='h3'>Hello</Text>
        <Text variant='h4'>Hello</Text>
        <Text variant='h5'>Hello</Text>
        <Text variant='h6'>Hello</Text>
        <Text variant='p'>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Text>

        <Col gap='lg'>
          <Col>
            <Text variant='h2'>Primary</Text>
            <Button fullWidth>Button</Button>
            <Button size='sm'>Button</Button>
            <Button size='md'>Button</Button>
            <Button size='lg'>Button</Button>
          </Col>

          <Col>
            <Text variant='h2'>Secondary</Text>
            <Button fullWidth intent='secondary'>
              Button
            </Button>
            <Button size='sm' intent='secondary'>
              Button
            </Button>
            <Button size='md' intent='secondary'>
              Button
            </Button>
            <Button size='lg' intent='secondary'>
              Button
            </Button>
          </Col>

          <Col>
            <Text variant='h2'>Primary With Icons</Text>
            <Button fullWidth icon={FaBell}>
              Button
            </Button>
            <Button size='sm' icon={FaBell}>
              Button
            </Button>
            <Button size='md' icon={FaBell}>
              Button
            </Button>
            <Button size='lg' icon={FaBell}>
              Button
            </Button>
          </Col>

          <Col>
            <Text variant='h2'>Secondary With Icons</Text>
            <Button fullWidth icon={FaBell} intent='secondary'>
              Button
            </Button>
            <Button size='sm' icon={FaBell} intent='secondary'>
              Button
            </Button>
            <Button size='md' icon={FaBell} intent='secondary'>
              Button
            </Button>
            <Button size='lg' icon={FaBell} intent='secondary'>
              Button
            </Button>
          </Col>

          <Col>
            <Text variant='h2'>Danger</Text>
            <Button fullWidth icon={FaBell} intent='danger'>
              Button
            </Button>
            <Button size='sm' icon={FaBell} intent='danger'>
              Button
            </Button>
            <Button size='md' icon={FaBell} intent='danger'>
              Button
            </Button>
            <Button size='lg' icon={FaBell} intent='danger'>
              Button
            </Button>
          </Col>

          <Col>
            <Text variant='h2'>Success</Text>
            <Button fullWidth icon={FaBell} intent='success'>
              Button
            </Button>
            <Button size='sm' icon={FaBell} intent='success'>
              Button
            </Button>
            <Button size='md' icon={FaBell} intent='success'>
              Button
            </Button>
            <Button size='lg' icon={FaBell} intent='success'>
              Button
            </Button>
          </Col>
        </Col>
      </Container>
    </>
  )
}

export default Home
