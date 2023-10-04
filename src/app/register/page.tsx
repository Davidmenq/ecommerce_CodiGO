'use client'
import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import React, { useState } from 'react'
import axios from 'axios'


const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [repetirContraseña, setRepetirContraseña] = useState('');
    const registerUser = () => {
        axios.post('https://ecommerce-api-backend-nlld.onrender.com/registro', {
            nombre:nombre,
            apellido:apellido,
            correo: email,
            password: contraseña
        })
            .then(function (response) {
                console.log(response);
                console.log(email);
                
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
       alert(`Felicitaciones ${nombre} ${apellido} te registraste correctamente`)     
    };
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
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Nombre</label>
                        <input className='border-[1px] border-[#50C2D8] rounded-md shadow-lg' onChange={(e) => setNombre(e.target.value)} type="text" />
                    </section>
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Apellido</label>
                        <input className='border-[1px] border-[#50C2D8] rounded-md shadow-lg' onChange={(e) => setApellido(e.target.value)} type="text" />
                    </section>
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Correo Electrónico</label>
                        <input className='border-[1px] border-[#50C2D8] rounded-md shadow-lg' onChange={(e) => setEmail(e.target.value)} type="email" />
                    </section>
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Contraseña</label>
                        <input className='border-[1px] border-[#50C2D8] rounded-md shadow-lg' onChange={(e) => setContraseña(e.target.value)} type="password" />
                    </section>
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Repetir Contraseña</label>
                        <input className='border-[1px] border-[#50C2D8] rounded-md shadow-lg' onChange={(e) => setRepetirContraseña(e.target.value)} type="password" />
                    </section> 
                    {/* <InputDatos contenido={'Nombre'} tipo={'input'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Apellido'} tipo={'text'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Correo Electrónico'} tipo={'email'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Contraseña'} tipo={'password'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Repetir Contraseña'} tipo={'password'} placeholder={''} labelColor={'#50C2D8'}></InputDatos> */}
                    {/* <BtnForm label={'Finalizar'} labelColor={'white'} ruta={''}></BtnForm> */}
                    <button onClick={() => registerUser()} className={`relative rounded-3xl border-2 mx-auto p-[1vh] pl-[4vw] pr-[4vw] md:pl-[2vw] my-4 md:pr-[2vw] bg-[#2C5364] font-light text-white hover:scale-105 ease-in-out duration-300 hover:bg-white hover:text-[#50C2D8] hover:font-semibold hover:border-[#50C2D8] lg:my-6`}>
                        Finalizar
                        <a href='' className='absolute z-20 top-0 left-0 h-full w-full'></a>
                    </button>
                </form>
                <div className='flex flex-grow justify-center p-4'>
                    <p className='text-black'>¿Ya tienes una cuenta? </p>
                    <Links ruta={'/login'} label={' Ingresar'} labelColor={'#ffffff'}></Links>
                </div>
            </div>
        </div>
    )
}

export default Register