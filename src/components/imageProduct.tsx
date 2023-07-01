import {  FC } from 'react'
import Image from 'next/image'

/* se agrega los atributos que tendra input datos */
interface Props {
    ruta: string,    
}

const ImageProduct: FC<Props> = ({ ruta }) => {
    return (
        <div className="p-8">            
            <Image
                className='mx-auto w-[350px] h-[200px] object-contain'
                src={ruta}
                alt="Imagen de Producto"
                width={280}
                height={74}
                priority
            />
        </div>
    )
}

export default ImageProduct