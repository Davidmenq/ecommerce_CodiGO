import { FC } from 'react'
import axios from 'axios'

interface Props {
    label: string,
    labelColor: string,
    ruta: string,
}

const BtnForm: FC<Props> = ({ label, labelColor, ruta }) => {
  

    return (        
            <button className={`relative rounded-3xl border-2 mx-auto p-[1vh] pl-[4vw] pr-[4vw] md:pl-[2vw] my-4 md:pr-[2vw] bg-[#2C5364] font-light text-${labelColor} hover:scale-105 ease-in-out duration-300 hover:bg-white hover:text-[#50C2D8] hover:font-semibold hover:border-[#50C2D8] lg:my-6`}>
                {label}
                <a href={ruta} className='absolute z-20 top-0 left-0 h-full w-full'></a>
            </button>
    )
}

export default BtnForm