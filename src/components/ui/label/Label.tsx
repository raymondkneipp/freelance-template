interface Props extends React.ComponentPropsWithoutRef<'label'> {
  children: string
}

export const Label: React.FC<Props> = ({ htmlFor, children, ...props }) => {
  return (
    <label htmlFor={htmlFor} className='text-sm font-bold' {...props}>
      {children}
    </label>
  )
}
