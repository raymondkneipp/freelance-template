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
  IconCard
} from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'
import { FaBeer, FaBell } from 'react-icons/fa'
import { SERVICES } from '$constants'
import { HiCodeBracket, HiMagnifyingGlass, HiMegaphone, HiPencilSquare } from 'react-icons/hi2'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })

  const handleClick = () => {
    alert(hello.data?.greeting)
  }

  return (
    <>
      <Hero />

      <Container>
        <Spacer className='grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:grid-rows-2'>
          <Col className='row-span-full'>
            <Text variant='h2'>What We Offer</Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia.
            </Text>
            <ButtonLink href={SERVICES.href} intent='secondary'>
              {SERVICES.label}
            </ButtonLink>
          </Col>

            <IconCard icon={HiMegaphone}>
          <Col gap='sm'>
            <Text variant='h3' intent='primary'>
              Marketing
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet.
            </Text>
          </Col>
          </IconCard>

            <IconCard icon={HiCodeBracket}>
          <Col gap='sm'>
            <Text variant='h3' intent='primary'>
              Web Design
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet.
            </Text>
          </Col>
          </IconCard>

            <IconCard icon={HiPencilSquare}>
          <Col gap='sm'>
            <Text variant='h3' intent='primary'>
              Copywriting
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet.
            </Text>
          </Col>
          </IconCard>

            <IconCard icon={HiMagnifyingGlass}>
          <Col gap='sm'>
            <Text variant='h3' intent='primary'>
              SEO Optimization
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet.
            </Text>
          </Col>
          </IconCard>
        </Spacer>
      </Container>

      <Container>
        <Spacer>
          <Col gap='lg'>
          <Col gap='sm'>
            <Text variant='h2'>Cards in Row</Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia.
            </Text>
            </Col>
            <Row gap='lg'>
              {[...Array(3)].map((_, i) => (
                <Card
                  key={i}
                  image={{
                    src: '/images/code.jpg',
                    alt: 'random pic',
                  }}
                >
                  <Col gap='sm'>
                    <Text variant='h4' element='h3' clamp={1}>
                      Lorem ipsum dolor sit amet
                    </Text>
                    <Text clamp={3}>
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
      </Container>

      <CTA />
    </>
  )
}

export default Home
