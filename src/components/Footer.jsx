import AcordeonTailwind from './AcordeonTailwind'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col py-6 bg-[#0F2027]'>
        <div className='mt-4 mb-20'>
            <AcordeonTailwind />
        </div>
        <div className='w-auto flex-col'>
            <div className='flex flex-row justify-center'>
                <Link href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                    <Image src='/imagenes/instagram.svg' href='https://www.youtube.com' width={20} height={20} alt="link de Instagram" className="mx-2 cursor-pointer h-10 w-10"/>
                </Link>
                <Link href='https://www.youtube.com' target="_blank" rel="noopener noreferrer">
                    <Image src='/imagenes/youtube.svg'width={20} height={20} alt="link de Youtube" className="mx-2 cursor-pointer h-10 w-10"/>
                </Link>
                <Link href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                    <Image src='/imagenes/facebook.svg'width={20} height={20} alt="link de Facebook" className="mx-2 cursor-pointer h-10 w-10"/>
                </Link>
            </div>
            <div className='flex flex-col py-4 justify-center'>
                <p className='text-white text-center'>©Copyright 2023</p>
                <p className='text-white text-center'>Todos los derechos reservados</p>
            </div>
        </div>
    </div>
  )
}

export default Footer