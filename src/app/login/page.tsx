import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import React from 'react'

const Login = () => {
    return (        
        <div className=''>
            <div className='flex flex-col bg-white text-center lg:mx-80 py-5 items-center'>
                <div className='flex flex-grow p-2 md:hidden'>
                    <Links ruta={'/login'} label={'Inicio'} labelColor={''}></Links>
                    <Links ruta={'/recoverPassword'} label={'>Iniciar Sesión'} labelColor={''}></Links>
                </div>
                <PrincipalFontForm contenido={'Iniciar Sesión'} color={'#50C2D8'}></PrincipalFontForm>
                <ImageForm ruta='/imagenes/imagen1.webp' ></ImageForm>
                <form className='w-10  m-auto  py-8 flex flex-col rounded-xl items-center'>
                    <InputDatos contenido={'Correo Electrónico'} tipo={'email'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Contraseña'} tipo={'password'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <div className='flex justify-start mt-2 p-2 lg:auto xl:auto '>
                        <input type="checkbox" className="" />
                        <h3 className='m-1 text-[#50C2D8] font-light'>Recordar</h3>
                    </div>
                    
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