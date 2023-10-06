import AcordeonTailwind from './AcordeonTailwind'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col  sm:grid sm:grid-cols-2 sm:pl-10
    bg-gradient-to-t from-[#0F2027] from-5%  via-[#2C5364] via-70% to-[#0F2027] to-95%'>
        <div className='flex content-center mt-4 mb-20'>
            <AcordeonTailwind />
        </div>
        <div className='flex w-auto flex-col sm:justify-center sm:items-center sm:content-center lg:pl-20'>
            <div className='flex flex-row justify-center'>
                <Link href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                    <Image src='/imagenes/instagram.svg' width={20} height={20} alt="link de Instagram" className="mx-2 cursor-pointer h-10 w-10"/>
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