import {
  Container,
  Text,
  ButtonLink,
  Col,
  Row,
  Spacer,
} from '$components'
import {FaBoxTissue, FaBriefcase} from "react-icons/fa"

export const Hero: React.FC = () => {
  return (
      <Spacer size='lg' className='bg-red-300'>
        <Container maxWidth='sm'>
          <Col align='center'>
            <Text variant='h1' align='center'>
              A Great Tagline Goes Here!
            </Text>
            <Text align='center'>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            </Text>

            <Row justify="center">
              <ButtonLink href="/" intent="primary" size="lg" icon={FaBoxTissue}>Get Started</ButtonLink>
              <ButtonLink href="/" intent="secondary" size="lg" icon={FaBriefcase}>Learn More</ButtonLink>
            </Row>
          </Col>
        </Container>
      </Spacer>
  );
}
