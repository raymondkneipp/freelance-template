import { Col, Label } from '$components'
import { useId } from 'react'

interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> {
  label: string
}

export const Input: React.FC<Props> = ({
  type = 'text',
  label,
  ...props
}) => {
  const id = useId()

  return (
    <Col gap='sm'>
      <Label htmlFor={id}>{label}</Label>
      <input
        type={type}
        id={id}
        className='w-full border py-3 px-6'
        {...props}
      />
    </Col>
  )
}
