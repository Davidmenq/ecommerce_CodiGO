'use client'
import { FC }from 'react'
import {useState} from 'react'

/* se agrega los atributos que tendra input datos */
interface Props {
    contenido: string,
    tipo: string,
    placeholder: string,
    labelColor: string

}

const InputDatos: FC<Props> = ({ contenido, tipo, placeholder, labelColor }) => {
    const [nombre, setNombre] = useState('');
    console.log(nombre);
    
    return (
        <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
            <label className={`flex text-[${labelColor}] font-light justify-start py-4`}>{contenido}</label>
            <input className='border-[1px] border-[#50C2D8] rounded-md shadow-lg '  placeholder={placeholder} type={tipo} />
        </section>
    )
}

export default InputDatos