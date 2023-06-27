import { FC } from 'react'

/* se agrega los atributos que tendra input datos */
interface Props {           
    contenido: string
    color: string
}

const PrincipalFontForm: FC<Props> = ({ contenido, color }) => {
    return (
        <h1 className={`font-light text-[${color}] text-[5vh] py-5`}>{contenido}</h1>
    )
}

export default PrincipalFontForm