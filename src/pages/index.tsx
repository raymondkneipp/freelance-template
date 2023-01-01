import {
  Container,
  Text,
  Button,
  Col,
  Row,
  Anchor,
  Full,
  Card,
} from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'
import { FaBell } from 'react-icons/fa'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })
  console.log(hello.data)

  return (
    <>
      <Full className='bg-red-200'>
        <Col align='center'>
          <Text variant='h1' align='center'>
            A Great Tagline Goes Here!
          </Text>
          <Text align='center'>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
          </Text>
        </Col>
      </Full>
      <Container>
        <Col gap='lg'>
          <Row>
            {[...Array(5)].map((_, i) => (
              <Card key={i}>
                <Col gap='sm'>
                  <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    luptate laboris sint cupidatat ullamco ut ea consectetur et
                    est culpa et culpa duis.
                  </Text>
                    <Button fullWidth>Click Me</Button>
                </Col>
              </Card>
            ))}
          </Row>
              <Card size="sm">
                <Col gap='sm'>
                  <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    luptate laboris sint
                  </Text>
                    <Button size="sm">Click Me</Button>
                </Col>
              </Card>
              <Card size="md">
                <Col gap='sm'>
                  <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    luptate laboris sint
                  </Text>
                    <Button size="sm">Click Me</Button>
                </Col>
              </Card>
              <Card size="lg">
                <Col gap='md'>
                  <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    luptate laboris sint
                  </Text>
                    <Button size="lg">Click Me</Button>
                </Col>
              </Card>
          <Col>
            <Text variant='h1'>Hello</Text>
            <Text variant='h2'>Hello</Text>
            <Text variant='h3'>Hello</Text>
            <Text variant='h4'>Hello</Text>
            <Text variant='h5'>Hello</Text>
            <Text variant='h6'>Hello</Text>
            <Text variant='p'>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </Text>
          </Col>

          <Row gap='lg'>
            <Col>
              <Text variant='h2'>Primary</Text>
              <Button size='sm'>Button</Button>
              <Button size='md'>Button</Button>
              <Button size='lg'>Button</Button>
              <Button fullWidth>Button</Button>
            </Col>

            <Col>
              <Text variant='h2'>Secondary</Text>
              <Button size='sm' intent='secondary'>
                Button
              </Button>
              <Button size='md' intent='secondary'>
                Button
              </Button>
              <Button size='lg' intent='secondary'>
                Button
              </Button>
              <Button fullWidth intent='secondary'>
                Button
              </Button>
            </Col>

            <Col>
              <Text variant='h2'>Primary With Icons</Text>
              <Button size='sm' icon={FaBell}>
                Button
              </Button>
              <Button size='md' icon={FaBell}>
                Button
              </Button>
              <Button size='lg' icon={FaBell}>
                Button
              </Button>
              <Button fullWidth icon={FaBell}>
                Button
              </Button>
            </Col>

            <Col>
              <Text variant='h2'>Danger</Text>
              <Button size='sm' intent='danger'>
                Button
              </Button>
              <Button size='md' intent='danger'>
                Button
              </Button>
              <Button size='lg' intent='danger'>
                Button
              </Button>
              <Button fullWidth intent='danger'>
                Button
              </Button>
            </Col>

            <Col>
              <Text variant='h2'>Success</Text>
              <Button size='sm' intent='success'>
                Button
              </Button>
              <Button size='md' intent='success'>
                Button
              </Button>
              <Button size='lg' intent='success'>
                Button
              </Button>
              <Button fullWidth intent='success'>
                Button
              </Button>
            </Col>
          </Row>

          <Col>
            <Text variant='h2'>Anchors</Text>
            <Anchor href='/'>Anchor</Anchor>
            <Anchor href='/' intent='primary'>
              Anchor
            </Anchor>
            <Anchor href='/' newTab>
              New Tab
            </Anchor>
            <Text>
              Lorem ipsum <Anchor intent='primary'>dolor sit amet</Anchor>, qui
              minim labore adipisicing minim sint cillum{' '}
              <Anchor intent='default'>sint consectetur</Anchor> cupidatat.
            </Text>
          </Col>
        </Col>
      </Container>
    </>
  )
}

export default Home
