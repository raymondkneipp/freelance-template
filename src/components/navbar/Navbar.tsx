import { Popover, Transition } from '@headlessui/react'
import { Container, Row, Anchor, Col, Spacer, Brand } from '$components'
import { NAV_ROUTES } from '$constants'
import { useRouter } from 'next/router'
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2'

export const NavBar: React.FC = () => {
  const router = useRouter()

  return (
    <nav className='border-b'>
      <Spacer size='sm'>
        <Container>
          <Row align='center' justify='between' gap='lg'>
            <Brand />

            <Row gap='lg' className='hidden md:flex'>
              {NAV_ROUTES.map((route) => (
                <Anchor
                  key={route.label}
                  href={route.href}
                  intent={
                    router.pathname === route.href ? 'primary' : 'default'
                  }
                >
                  {route.label}
                </Anchor>
              ))}
            </Row>

            <Popover className='relative ml-auto md:hidden'>
              {({open}) => (
<>
              <Popover.Button className='h-12 w-12 rounded-2xl p-2 transition hover:bg-neutral-100'>
                {open ? (

                <HiXMark size='auto' />
                ) : (

                <HiBars3BottomRight size='auto' />
                )}
              </Popover.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Popover.Panel className='absolute right-0 z-10 mt-4 w-48 rounded-2xl border bg-white p-8'>
                  <Col gap='md' align="stretch">
                    {NAV_ROUTES.map((route) => (
                      <Anchor
                        key={route.label}
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
              </Transition>
              </>
              )}
            </Popover>
          </Row>
        </Container>
      </Spacer>
    </nav>
  )
}
