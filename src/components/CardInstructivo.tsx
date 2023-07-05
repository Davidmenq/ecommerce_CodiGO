import {FC} from 'react'
import Image from 'next/image'

interface Props{
  icon: string,
  title: string,
  description: string,
  altRename: string,
}

const CardInstructivo:FC<Props> = ({icon,title,description,altRename}) => {
  return (
    <div className='border max-w-sm mx-auto my-6 bg-[#fff] shadow-2xl rounded-xl text-center p-5 lg:py-14'>
      <Image src={icon} width={100} height={100} alt={altRename} className='m-auto' />
      <h2 className='text-xl font-bold my-4 lg:text-2xl'>{title}</h2>
      <p className='text-sm'>{description}</p>
    </div>
  )
}

export default CardInstructivo