import {  FC } from 'react'

interface Props {    
    label: string,
    labelColor: string,
}

const BtnForm: FC<Props> = ({ label, labelColor }) => {
    return (
        <button className={`rounded-3xl border-2 m-auto p-[1vh] pl-[4vw] pr-[4vw] md:pl-[2vw] my-4 md:pr-[2vw] bg-[#2C5364] font-light text-${labelColor} hover:scale-105 ease-in-out duration-300
        hover:bg-white hover:text-[#50C2D8] hover:font-semibold hover:border-[#50C2D8] lg:my-6`}>{label}</button>
    )
}

export default BtnForm