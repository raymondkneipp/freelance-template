import { Col, Label } from '$components'
import { useId } from 'react'

interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> {}

export const Input: React.FC<Props> = ({
  type = 'text',
  ...props
}) => {
  const id = useId()

  return (
    <Col gap='sm'>
      <Label htmlFor={id}>Name</Label>
      <input
        type={type}
        id={id}
        className='w-full rounded-2xl border py-3 px-6'
        {...props}
      />
    </Col>
  )
}
