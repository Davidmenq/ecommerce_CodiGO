import {  FC } from 'react'
import Image from 'next/image'

/* se agrega los atributos que tendra input datos */
interface Props {
    ruta: string,

}

const ImageForm: FC<Props> = ({ ruta }) => {
    return (
        <div className="p-8">            
            <Image
                className="flex m-auto"
                src={ruta}
                alt="Imagen principal del formulario"
                width={280}
                height={74}
                priority
            />
        </div>
    )
}

export default ImageForm








