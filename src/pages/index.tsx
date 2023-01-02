import {
  Container,
  Text,
  ButtonLink,
  Button,
  Col,
  Row,
  Anchor,
  Card,
  Spacer,
  Hero,
  CTA,
} from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'
import { FaBell } from 'react-icons/fa'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })

  const handleClick = () => {
    alert(hello.data?.greeting)
  }

  return (
    <>
      <Hero />

      <Container>
        <Spacer>
          <Col gap='lg'>
            <Text variant='h2'>Cards in Row</Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia.
            </Text>
            <Row gap='lg'>
              {[...Array(3)].map((_, i) => (
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
                    <Text variant='p' element='span' intent='primary'>
                      March 5th 2023
                    </Text>
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
                  mollit ex esse exercitation amet. Nisi anim cupidatat luptate
                  laboris sint
                </Text>
                <ButtonLink size='sm'>Click Me</ButtonLink>
              </Col>
            </Card>
            <Card size='md'>
              <Col gap='sm'>
                <Text variant='h3'>Lorem ipsum dolor sit amet</Text>
                <Text>
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat luptate
                  laboris sint
                </Text>
                <ButtonLink size='sm'>Click Me</ButtonLink>
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
                <ButtonLink size='lg'>Click Me</ButtonLink>
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
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </Text>
            <Text variant='h1' element='p'>
              Paragraph that looks like an h1
            </Text>
          </Col>
        </Spacer>

        <Spacer>
          <Col>
            <Text variant='h2'>Button Links</Text>
            <Row gap='lg'>
              <Col>
                <Text variant='h2'>Primary</Text>
                <ButtonLink size='sm'>Small</ButtonLink>
                <ButtonLink size='md'>Default</ButtonLink>
                <ButtonLink size='lg'>Large</ButtonLink>
                <ButtonLink fullWidth>Full Width</ButtonLink>
              </Col>

              <Col>
                <Text variant='h3'>Secondary</Text>
                <ButtonLink size='sm' intent='secondary' href='/'>
                  Small
                </ButtonLink>
                <ButtonLink size='md' intent='secondary'>
                  Default
                </ButtonLink>
                <ButtonLink size='lg' intent='secondary'>
                  Large
                </ButtonLink>
                <ButtonLink fullWidth intent='secondary'>
                  Full Width
                </ButtonLink>
              </Col>

              <Col>
                <Text variant='h3'>Icons</Text>
                <ButtonLink size='sm' icon={FaBell}>
                  Small
                </ButtonLink>
                <ButtonLink size='md' icon={FaBell}>
                  Default
                </ButtonLink>
                <ButtonLink size='lg' icon={FaBell}>
                  Button
                </ButtonLink>
                <ButtonLink fullWidth icon={FaBell}>
                  Full Width
                </ButtonLink>
              </Col>

              <Col>
                <Text variant='h3'>Danger</Text>
                <ButtonLink size='sm' intent='danger'>
                  Small
                </ButtonLink>
                <ButtonLink size='md' intent='danger'>
                  Default
                </ButtonLink>
                <ButtonLink size='lg' intent='danger'>
                  Large
                </ButtonLink>
                <ButtonLink fullWidth intent='danger'>
                  Full Width
                </ButtonLink>
              </Col>

              <Col>
                <Text variant='h3'>Success</Text>
                <ButtonLink size='sm' intent='success'>
                  Small
                </ButtonLink>
                <ButtonLink size='md' intent='success'>
                  Default
                </ButtonLink>
                <ButtonLink size='lg' intent='success'>
                  Large
                </ButtonLink>
                <ButtonLink fullWidth intent='success'>
                  Full Width
                </ButtonLink>
              </Col>
            </Row>
          </Col>
        </Spacer>

        <Spacer>
          <Col>
            <Text variant='h2'>Buttons</Text>
            <Row gap='lg'>
              <Col>
                <Text variant='h2'>Primary</Text>
                <Button onClick={handleClick} size='sm'>
                  Small
                </Button>
                <Button onClick={handleClick} size='md'>
                  Default
                </Button>
                <Button onClick={handleClick} size='lg'>
                  Large
                </Button>
                <Button onClick={handleClick} fullWidth>
                  Full Width
                </Button>
              </Col>

              <Col>
                <Text variant='h3'>Secondary</Text>
                <Button size='sm' intent='secondary' onClick={handleClick}>
                  Small
                </Button>
                <Button size='md' intent='secondary' onClick={handleClick}>
                  Default
                </Button>
                <Button size='lg' intent='secondary' onClick={handleClick}>
                  Large
                </Button>
                <Button fullWidth intent='secondary' onClick={handleClick}>
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
              Lorem ipsum <Anchor intent='primary'>dolor sit amet</Anchor>, qui
              minim labore adipisicing minim sint cillum{' '}
              <Anchor intent='default'>sint consectetur</Anchor> cupidatat.
            </Text>
          </Col>
        </Spacer>
      </Container>

      <CTA />
    </>
  )
}

export default Home
