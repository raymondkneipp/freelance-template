import { Container, Text, Col, Spacer, Hero, CTA, Card } from '$components'
import { type NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Hero />

      <Container>
        <Spacer>
          <Col>
            <Col gap='sm'>
              <Text variant='h2'>Heading #2</Text>
              <Text>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </Text>
            </Col>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {[...Array(3)].map((item) => (
                <Card
                  image={{ src: '/images/code.jpg', alt: 'code' }}
                  key={item}
                >
                  <Col gap='sm'>
                    <Text variant='h3'>
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    </Text>
                    <Text clamp={3}>
                      Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                      reprehenderit enim labore culpa sint ad nisi Lorem
                      pariatur mollit ex esse exercitation amet. Nisi anim
                      cupidatat excepteur officia. Reprehenderit nostrud nostrud
                      ipsum Lorem est aliquip amet voluptate voluptate dolor
                      minim nulla est proident. Nostrud officia pariatur ut
                      officia. Sit irure elit esse ea nulla sunt ex occaecat
                      reprehenderit commodo officia dolor Lorem duis laboris
                      cupidatat officia voluptate. Culpa proident adipisicing id
                      nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                      Aliqua reprehenderit commodo ex non excepteur duis sunt
                      velit enim. Voluptate laboris sint cupidatat ullamco ut ea
                      consectetur et est culpa et culpa duis.
                    </Text>
                  </Col>
                </Card>
              ))}
            </div>
          </Col>
        </Spacer>
      </Container>

      <Container>
        <Spacer>
          <Col gap='sm'>
            <Text variant='h2'>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </Text>
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
          </Col>
        </Spacer>
      </Container>

      <Container>
        <Spacer>
          <Col gap='sm'>
            <Text variant='h2'>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </Text>
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
          </Col>
        </Spacer>
      </Container>

      <CTA />
    </>
  )
}

export default Home
