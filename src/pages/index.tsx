import { Container } from '$components'
import { type NextPage } from 'next'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })
  console.log(hello.data)

  return (
    <>
      <Container>
        <h1 className='font-heading'>Hello World!</h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </Container>
    </>
  )
}

export default Home
