import Image from "next/image"

export const Logo: React.FC = () => {
  return (
    <>
      <Image src="/images/logo.svg" alt="logo" width={60} height={60} className='w-12 h-12' />
    </>
  )
}
