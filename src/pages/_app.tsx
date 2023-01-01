import { type AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import '../styles/globals.css'
import { Inter, Syne } from '@next/font/google'
import { NavBar, Col } from '$components'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: '700',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Col className={`${inter.variable} ${syne.variable} font-sans`} align="stretch">
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </Col>
  )
}

export default trpc.withTRPC(MyApp)
