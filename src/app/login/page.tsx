'use client'
import BtnForm from '@/components/BtnForm'
import ImageForm from '@/components/ImageForm'
import InputDatos from '@/components/InputDatos'
import Links from '@/components/Links'
import PrincipalFontForm from '@/components/PrincipalFontForm'
import React , {useState}from 'react'
import axios from 'axios'
import { tokenState } from "@/atoms/tokenState"
import { useRecoilState } from 'recoil'

const Login = () => {
    const [email,setEmail]=useState("")
    const [contraseña,setContraseña]=useState("")
    const [token,setToken] = useRecoilState(tokenState)

    const loginUser = () => {
        if (email.length === 0) {
            alert("Email has been left blank!");
          } else if (contraseña.length === 0) {
            alert("Password has been left blank!");
          } else {
            axios.post('http://127.0.0.1:5000/login', {
              correo: email,
              password: contraseña
            })
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                const token = response.data.content; // Asumiendo que el token está en un campo 'token' de la respuesta
                console.log("Token:", token);
                localStorage.setItem('token', token);
                setToken(token)
              }
            })
            .catch(function (error) {
              console.log(error, 'error');
              if (error.response && error.response.status === 401) {
                alert("Invalid credentials");
              }
            });
          }
    }
    return (
        <div className='w-full h-full flex flex-col lg:flex-row p-2 justify-center my-10'>
            <div className='flex flex-grow p-2 md:hidden'>
                <Links ruta={'/login'} label={'Inicio'} labelColor={''}></Links>
                <Links ruta={'/recoverPassword'} label={'>Iniciar Sesión'} labelColor={''}></Links>
            </div>
            <div className='hidden lg:block rounded-l-xl shadow-2xl lg:w-[40vw] relative hover:brightness-90 ease-in-out duration-300'>
                <div className='flex h-full w-full'>
                    <h1 className="relative glow-effect text-4xl font-bold tracking-tight text-white sm:text-6xl z-10 my-auto mx-auto">
                        Tech Store
                    </h1>
                    <img
                        src={"/imagenes/login-img.webp"}
                        alt="Productos Tecnológicos"
                        className="absolute inset-0 -z-10 h-full w-full object-cover fade-in rounded-l-xl hover:brightness-50"
                    />
                </div>
            </div>
            <div className=' flex flex-col bg-[#fff] text-center py-5 rounded-r-lg shadow-2xl'>
                <PrincipalFontForm contenido={'Iniciar Sesión'} color={'#50C2D8'}></PrincipalFontForm>
                <ImageForm ruta='/imagenes/imagen1.webp' ></ImageForm>
                <form className='w-[90vw] sm:w-[42vw] m-auto p-4 md:p-10 py-8 flex flex-col rounded-xl'>
                    {/* <InputDatos contenido={'Correo Electrónico'} tipo={'email'} placeholder={''} labelColor={'#50C2D8'}></InputDatos>
                    <InputDatos contenido={'Contraseña'} tipo={'password'} placeholder={''} labelColor={'#50C2D8'}></InputDatos> */}
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Correo Electronico</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border-[1px] border-[#50C2D8] rounded-md shadow-lg ' placeholder="" type="email" />
                    </section>
                    <section className='flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300'>
                        <label className={`flex text-[#50C2D8] font-light justify-start py-4`}>Contraseña</label>
                        <input  onChange={(e) => setContraseña(e.target.value)} className='border-[1px] border-[#50C2D8] rounded-md shadow-lg ' placeholder="" type="password" />
                    </section>
                    <div className='flex justify-start mt-2 p-2 lg:px-16 xl:px-40 '>
                        <input type="checkbox" className="" />
                        <h3 className='m-1 text-[#50C2D8] font-light'>Recordar</h3>
                    </div>

                    {/* <BtnForm label={'Iniciar Sesión'} labelColor={'white'} ruta={''}></BtnForm> */}
  
                </form>
                <button onClick={() => loginUser()} className='relative rounded-3xl border-2 mx-auto p-[1vh] pl-[4vw] pr-[4vw] md:pl-[2vw] my-4 md:pr-[2vw] bg-[#2C5364] font-light text-white hover:scale-105 ease-in-out duration-300 hover:bg-white hover:text-[#50C2D8] hover:font-semibold hover:border-[#50C2D8] lg:my-6'>
                        Finalizar
                       {/* <a href='/' className='absolute z-20 top-0 left-0 h-full w-full'></a>  */}
                    </button>
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