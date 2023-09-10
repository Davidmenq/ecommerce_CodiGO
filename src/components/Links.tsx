import React, { FC } from 'react'

interface Props{
    ruta: string,
    label: string,
    labelColor: string,    
}

const Links:FC<Props> = ({ruta, label, labelColor}) => {
  return (
    <a href={` ${ruta}`} className={` text-[${labelColor}] hover:scale-105 ease-in-out duration-300`}>{label}</a>
  )
}

export default Links