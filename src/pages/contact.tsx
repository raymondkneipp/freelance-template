import {
  Container,
  Text,
  Col,
  Spacer,
  Page,
  Anchor,
  Input,
  Textarea,
} from '$components'
import { ADDRESS, EMAIL, GEO, TELEPHONE } from '$constants'
import { type NextPage } from 'next'
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2'

const Contact: NextPage = () => {
  return (
    <Page>
      <Container>
        <Spacer className='grid md:grid-cols-2 lg:grid-cols-3 gap-8' size='lg'>
          <Col>
          <Col gap='sm'>
            <Text variant='h1'>Contact Us</Text>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            </Text>
          </Col>
            <Col gap='sm'>
              <Text variant='h6'>Other Ways To Reach Us</Text>
              <Anchor icon={HiPhone} href={`tel:${TELEPHONE}`}>
                {TELEPHONE}
              </Anchor>
              <Anchor icon={HiEnvelope} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </Anchor>
              <Anchor
                icon={HiMapPin}
                newTab
                href={`https://maps.google.com/?q=${GEO.latitude},${GEO.longitude}`}
              >
                {ADDRESS.streetAddress} {ADDRESS.addressLocality}{' '}
                {ADDRESS.addressRegion} {ADDRESS.postalCode}{' '}
                {ADDRESS.addressCountry}
              </Anchor>
            </Col>
            </Col>
          <form className='lg:col-span-2'>
            <Col align='stretch'>
              <Input label='Full Name' />
              <Input label='Email' type='email' />
              <Textarea label='Message' rows={3} />
            </Col>
          </form>
        </Spacer>
      </Container>

    </Page>
  )
}

export default Contact
