import { Col, Label } from '$components'
import { useId } from 'react'

interface Props extends Omit<React.ComponentPropsWithoutRef<'textarea'>, 'id'> {
  label: string
}

export const Textarea: React.FC<Props> = ({
  label,
  ...props
}) => {
  const id = useId()

  return (
    <Col gap='sm'>
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        className='w-full border py-3 px-6'
        {...props}
      ></textarea>
    </Col>
  )
}
