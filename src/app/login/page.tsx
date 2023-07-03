import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import React from 'react'

const Login = () => {
    return (        
        <div className='w-full h-full flex flex-col p-10'>
            <div className='flex flex-col bg-white text-center lg:mx-80 py-5'>
                <div className='flex flex-grow p-2 md:hidden'>
                    <Links ruta={'/login'} label={'Inicio'} labelColor={''}></Links>
                    <Links ruta={'/recoverPassword'} label={'>Iniciar Sesión'} labelColor={''}></Links>
                </div>
                <PrincipalFontForm contenido={'Iniciar Sesión'} color={'#50C2D8'}></PrincipalFontForm>
                <ImageForm ruta='/imagenes/imagen1.webp' ></ImageForm>
                <form className='w-[90vw] sm:w-[50vw] m-auto p-4 md:p-10 py-8 flex flex-col rounded-xl'>
                    <InputDatos contenido={'Correo Electrónico'} tipo={'email'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Contraseña'} tipo={'password'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <div className='flex justify-start mt-2 p-2 lg:px-16 xl:px-20 '>
                        <input type="checkbox" className="" />
                        <h3 className='m-1 text-[#50C2D8] font-light'>Recordar</h3>
                    </div>
                    <button className='text-white'></button>
                    <BtnForm label={'Iniciar Sesión'} labelColor={'white'}></BtnForm>
                </form>
                <div className='flex justify-center p-6 '>
                    <Links ruta={'/recoverPassword'} label={'¿Olvidaste tu Contraseña?'} labelColor={'#2C5364'}></Links>
                </div>
                <div className='flex flex-grow justify-center p-4'>
                    <p className='text-black'>¿No Tienes una Cuenta?</p>
                    <Links ruta={'/register'} label={'Registrate'} labelColor={'#2C5364'}></Links>
                </div>

            </div>
        </div>
    )
}

export default Login