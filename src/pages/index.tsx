import {
  Container,
  Text,
  Button,
  Col,
  Row,
  Anchor,
  Card,
  Spacer,
} from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'
import { FaBell } from 'react-icons/fa'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })
  console.log(hello.data)

  return (
    <>
      <Spacer size='lg' className='bg-red-200'>
        <Container size='sm'>
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
        </Container>
      </Spacer>

      <Container>
          <Spacer>
            <Col>
              <Text variant='h2'>Cards in Row</Text>
              <Row>
                {[...Array(5)].map((_, i) => (
                  <Card
                    key={i}
                    image={{
                      src: `https://picsum.photos/500/300?random=${i}`,
                      alt: 'random pic',
                    }}
                  >
                    <Col gap='sm'>
                      <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                      <Text>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem
                        pariatur mollit ex esse exercitation amet. Nisi anim
                        cupidatat luptate laboris sint cupidatat ullamco ut ea
                        consectetur et est culpa et culpa duis.
                      </Text>
                      <Button fullWidth>Click Me</Button>
                    </Col>
                  </Card>
                ))}
              </Row>
            </Col>
          </Spacer>

          <Spacer>
            <Col>
              <Text variant='h2'>Card Sizes</Text>
              <Card size='sm'>
                <Col gap='sm'>
                  <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    luptate laboris sint
                  </Text>
                  <Button size='sm'>Click Me</Button>
                </Col>
              </Card>
              <Card size='md'>
                <Col gap='sm'>
                  <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    luptate laboris sint
                  </Text>
                  <Button size='sm'>Click Me</Button>
                </Col>
              </Card>
              <Card size='lg'>
                <Col gap='md'>
                  <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet Nisi anim cupidatat luptate
                    laboris sint
                  </Text>
                  <Button size='lg'>Click Me</Button>
                </Col>
              </Card>
            </Col>
          </Spacer>

          <Spacer>
            <Col>
              <Text variant='h1'>Heading #1</Text>
              <Text variant='h2'>Heading #2</Text>
              <Text variant='h3'>Heading #3</Text>
              <Text variant='h4'>Heading #4</Text>
              <Text variant='h5'>Heading #5</Text>
              <Text variant='h6'>Heading #6</Text>
              <Text>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                ex occaecat reprehenderit commodo officia dolor Lorem duis
                laboris cupidatat officia voluptate. Culpa proident adipisicing
                id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                et est culpa et culpa duis.
              </Text>
              <Text variant='h1' element='p'>
                Paragraph that looks like an h1
              </Text>
            </Col>
          </Spacer>

          <Spacer>
            <Col>
              <Text variant='h2'>Buttons</Text>
              <Row gap='lg'>
                <Col>
                  <Text variant='h2'>Primary</Text>
                  <Button size='sm'>Small</Button>
                  <Button size='md'>Default</Button>
                  <Button size='lg'>Large</Button>
                  <Button fullWidth>Full Width</Button>
                </Col>

                <Col>
                  <Text variant='h3'>Secondary</Text>
                  <Button size='sm' intent='secondary'>
                    Small
                  </Button>
                  <Button size='md' intent='secondary'>
                    Default
                  </Button>
                  <Button size='lg' intent='secondary'>
                    Large
                  </Button>
                  <Button fullWidth intent='secondary'>
                    Full Width
                  </Button>
                </Col>

                <Col>
                  <Text variant='h3'>Icons</Text>
                  <Button size='sm' icon={FaBell}>
                    Small
                  </Button>
                  <Button size='md' icon={FaBell}>
                    Default
                  </Button>
                  <Button size='lg' icon={FaBell}>
                    Button
                  </Button>
                  <Button fullWidth icon={FaBell}>
                    Full Width
                  </Button>
                </Col>

                <Col>
                  <Text variant='h3'>Danger</Text>
                  <Button size='sm' intent='danger'>
                    Small
                  </Button>
                  <Button size='md' intent='danger'>
                    Default
                  </Button>
                  <Button size='lg' intent='danger'>
                    Large
                  </Button>
                  <Button fullWidth intent='danger'>
                    Full Width
                  </Button>
                </Col>

                <Col>
                  <Text variant='h3'>Success</Text>
                  <Button size='sm' intent='success'>
                    Small
                  </Button>
                  <Button size='md' intent='success'>
                    Default
                  </Button>
                  <Button size='lg' intent='success'>
                    Large
                  </Button>
                  <Button fullWidth intent='success'>
                    Full Width
                  </Button>
                </Col>
              </Row>
            </Col>
          </Spacer>

          <Spacer>
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
                Lorem ipsum <Anchor intent='primary'>dolor sit amet</Anchor>,
                qui minim labore adipisicing minim sint cillum{' '}
                <Anchor intent='default'>sint consectetur</Anchor> cupidatat.
              </Text>
            </Col>
          </Spacer>
      </Container>
    </>
  )
}

export default Home
