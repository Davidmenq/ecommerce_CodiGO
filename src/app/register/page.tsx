import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import React from 'react'

const Register = () => {
    return (
        <div className=''>
            <div className='flex flex-grow p-2 md:hidden'>
                    <Links ruta={'/login'} label={'Inicio'} labelColor={''}></Links>
                    <Links ruta={'/recoverPassword'} label={'>Registro'} labelColor={''}></Links>
                </div>
            <div className='m-2 flex flex-col bg-[#50C2D8] text-center lg:mx-60 xl:mt-4 py-5 rounded-2xl 2xl:mx-96'>                
                <PrincipalFontForm contenido={'Crear Cuenta'} color={'#ffffff'}></PrincipalFontForm>                
                <form className='w-[90vw] sm:w-[50vw] m-auto p-4 md:p-10 py-8 flex flex-col rounded-xl'>
                    <InputDatos contenido={'Correo Electrónico'} tipo={'email'} placeholder={''} labelColor={'#ffffff'}></InputDatos>
                    <InputDatos contenido={'Usuario'} tipo={'input'} placeholder={''} labelColor={'#ffffff'}></InputDatos>
                    <InputDatos contenido={'Contraseña'} tipo={'password'} placeholder={''} labelColor={'#ffffff'}></InputDatos>
                    <InputDatos contenido={'Repetir Contraseña'} tipo={'password'} placeholder={''} labelColor={'#ffffff'}></InputDatos>                    
                    <button className='text-white'></button>
                    <BtnForm label={'Finalizar'} labelColor={'white'}></BtnForm>
                </form>                
                <div className='flex flex-grow justify-center p-4'>
                    <p className='text-black'>¿Ya tienes una cuenta?</p>
                    <Links ruta={'/login'} label={'Ingresar'} labelColor={'#ffffff'}></Links>
                </div>

            </div>
        </div>
    )
}

export default Register