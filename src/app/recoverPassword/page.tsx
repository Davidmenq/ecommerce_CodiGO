import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import React from 'react'

const RecoverPassword = () => {
    return (
        <div className='w-full h-full flex flex-col p-10'>
            <div className='flex flex-col bg-white text-center lg:mx-80 py-5'>
                <div className='flex flex-grow p-2'>
                    <Links ruta={'/login'} label={'Iniciar Sesión'} labelColor={''}></Links>
                    <Links ruta={'/recoverPassword'} label={'>Recuperar'} labelColor={''}></Links>
                </div>
                <PrincipalFontForm contenido={'Recuperar Contraseña'} color={'#50C2D8'}></PrincipalFontForm>
                <ImageForm ruta='/imagenes/imagen2.webp' ></ImageForm>
                <form className='w-[90vw] sm:w-[50vw] m-auto p-4 md:p-10 py-8 flex flex-col rounded-xl'>
                    <InputDatos contenido={'Correo Electrónico'} tipo={'email'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Usuario'} tipo={'input'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <div className='flex justify-start mt-2 p-2 lg:px-16 xl:px-20'>
                        <input type="checkbox" className="" />
                        <h3 className='m-1 text-[#50C2D8] font-light'>Recordar</h3>
                    </div>
                    <button className='text-white'></button>
                    <BtnForm label={'Enviar'} labelColor={'white'}></BtnForm>
                </form>
                <div className='flex flex-grow justify-center p-4'>
                    <p className='text-black'>¿Recuperaste tu cuenta?</p>
                    <Links ruta={'/login'} label={'Ingresar'} labelColor={'#2C5364'}></Links>
                </div>
            </div>
        </div>
    )
}

export default RecoverPassword