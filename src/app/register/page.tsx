import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import React from 'react'

const Register = () => {
    return (
        <div className='w-full h-full flex flex-col lg:flex-row p-2 justify-center my-10'>
            <div className='flex flex-grow p-2 md:hidden'>
                <Links ruta={'/login'} label={'Inicio'} labelColor={''}></Links>
                <Links ruta={'/recoverPassword'} label={'>Registro'} labelColor={''}></Links>
            </div>
            <div className='hidden lg:block rounded-l-xl shadow-2xl lg:w-[40vw] relative hover:brightness-90 ease-in-out duration-300'>
                <div className='flex h-full w-full'>
                    <h1 className="relative glow-effect text-4xl font-bold tracking-tight text-white sm:text-6xl z-10 my-auto mx-auto">
                        Tech Store
                    </h1>
                    <img
                        src={"/imagenes/Hero8.png"}
                        alt="Productos Tecnológicos"
                        className="absolute inset-0 -z-10 h-full w-full object-cover fade-in rounded-l-xl"
                    />
                </div>
            </div>
            <div className=' flex flex-col bg-[#fff] text-center py-5 rounded-r-lg shadow-2xl'>
                <PrincipalFontForm contenido={'Crear Cuenta'} color={'#50C2D8'}></PrincipalFontForm>
                <form className='w-[90vw] sm:w-[42vw] m-auto p-4 md:p-10 py-8 flex flex-col rounded-xl'>
                    <InputDatos contenido={'Correo Electrónico'} tipo={'email'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Usuario'} tipo={'input'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Contraseña'} tipo={'password'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Repetir Contraseña'} tipo={'password'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
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