import { Popover, Transition } from '@headlessui/react'
import { Container, Row, Anchor, Col, Brand } from '$components'
import { NAV_ROUTES } from '$constants'
import { useRouter } from 'next/router'
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2'
import React, { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

export const NavBar: React.FC = () => {
  const router = useRouter()

  const [hidden, setHidden] = useState<boolean>(false)
  const [prevScroll, setPrevScroll] = useState<number>(0)

  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < prevScroll) {
        setHidden(false)
      } else if (latest > 112 && latest > prevScroll) {
        setHidden(true)
      }
      setPrevScroll(scrollY.get())
    })
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -112 },
  }

  return (
    <motion.nav
      className='fixed top-0 right-0 left-0 z-50 border-b bg-white py-8'
      variants={variants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      onFocus={() => setHidden(false)}
    >
      <Container className='flex items-center justify-between gap-8'>
        <Brand />

        <Row gap='lg' className='hidden md:flex'>
          {NAV_ROUTES.map((route) => (
            <Anchor
              key={route.label}
              href={route.href}
              intent={router.pathname === route.href ? 'primary' : 'default'}
            >
              {route.label}
            </Anchor>
          ))}
        </Row>

        <Popover className='relative ml-auto md:hidden'>
          {({ open }) => (
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
                  <Col gap='md' align='stretch'>
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
      </Container>
    </motion.nav>
  )
}
