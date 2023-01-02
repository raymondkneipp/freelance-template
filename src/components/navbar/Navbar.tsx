import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { Text, Container, Logo, Row, Anchor, Col, Spacer } from '$components'
import { NAV_ROUTES, HOME } from '$constants'
import { useRouter } from 'next/router'
import { HiBars3BottomRight } from 'react-icons/hi2'

export const NavBar: React.FC = () => {
  const router = useRouter()

  return (
    <nav className='border-b'>
      <Spacer size="sm">
        <Container>
          <Row align='center' justify='between' gap='lg'>
            <Link href={HOME.href}>
              <Row align='center'>
                <Logo />
                <Text variant='h5' element='span'>
                  Brand
                </Text>
              </Row>
            </Link>

            <Row gap='lg' className='hidden sm:flex'>
              {NAV_ROUTES.map((route) => (
                <Anchor
                  href={route.href}
                  intent={
                    router.pathname === route.href ? 'primary' : 'default'
                  }
                >
                  {route.label}
                </Anchor>
              ))}
            </Row>

            <Popover className='relative sm:hidden'>
              <Popover.Button className='rounded-2xl p-2 transition hover:bg-neutral-100'>
                <HiBars3BottomRight size={36} />
              </Popover.Button>

              <Popover.Panel className='absolute right-0 z-10 mt-4 w-48 rounded-2xl border bg-white p-8'>
                <Col gap='md'>
                  {NAV_ROUTES.map((route) => (
                    <Anchor
                      href={route.href}
                      intent={
                        router.pathname === route.href ? 'primary' : 'default'
                      }
                    >
                      {route.label}
                    </Anchor>
                  ))}
                </Col>
              </Popover.Panel>
            </Popover>
          </Row>
        </Container>
      </Spacer>
    </nav>
  )
}
