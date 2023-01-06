import { type AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import '../styles/globals.css'
import { Inter, Syne } from '@next/font/google'
import { NavBar, Footer, Page } from '$components'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: '700',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <div className={`${inter.variable} ${syne.variable} font-sans`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default trpc.withTRPC(MyApp)
