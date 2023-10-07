'use client'

import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  
  const [agreed, setAgreed] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [localidad, setLocalidad] = useState("Arequipa");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  
  const router = useRouter();
  const redirigir=()=>router.push("/")

  const handleClick = (event:any) => {
    event.preventDefault();
   
    console.log(`${agreed} Hola, soy ${nombre} ${apellido} mi empresa es: 
    ${empresa} mi email: ${email} de ${localidad} mi numero de cel: ${telefono}. MENSAJE: ${mensaje}`);
    
    axios
      .post("https://ecommerce-api-backend-nlld.onrender.com/enviar-mensaje", {
        nombre: nombre,
        apellido: apellido,
        empresa: empresa,
        email: email,
        localidad: localidad,
        telefono: telefono,
        mensaje: mensaje,
        politicas: agreed
      })
      .then(function(response){
        console.log(response)
        if (response.status === 200){
          console.log("El mensaje fue enviado con exito");
          toast.success(`${nombre}, tu mensaje fue enviado con éxito`)
          setTimeout(redirigir,3000);
          
        }
      })
      .catch(function(error) {
          console.log(error, "error");
          if (error.response && error.response.status === 401) {
            alert("No se envio el mensaje, vuelva a intentarlo por favor");
          }
        })
  };

  return (
    <section>
      <section>
        <div className="absolute h-screen inset-x-0 top-[+10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <div className="relative h-screen left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[50deg] 
              bg-gradient-to-tr from-[#27dddd] via-[#fff] to-[#5cc7f5] opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Página de Contacto
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Escriba sus consultas o realice sus pedidos, el equipo de la empresa lo atenderá de inmediato.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nombres
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e)=>setNombre(e.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5cc7f5] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Apellidos
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e)=>setApellido(e.target.value)}
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                    focus:ring-[#5cc7f5] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Empresa o Cliente
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e)=>setEmpresa(e.target.value)}
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                    focus:ring-[#5cc7f5] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5cc7f5] 
                    sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Número telefónico
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Ciudad
                    </label>
                    <select
                      value={localidad}
                      onChange={(e)=>setLocalidad(e.target.value)}
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 
                      focus:ring-2 focus:ring-inset focus:ring-[#5cc7f5] sm:text-sm"
                    >
                      <option value="Arequipa">Arequipa</option>
                      <option value="Lima">Lima</option>
                      <option value="Otros">Otros</option>
                    </select>

                  </div>
                  <input
                    onChange={(e)=>setTelefono(e.target.value)}
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0  py-2 pl-40 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5cc7f5] 
                    sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={(e)=>setMensaje(e.target.value)}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5cc7f5] 
                    sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-[#27dddd]" : "bg-gray-200",
                      `flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 
                      transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 
                      focus-visible:outline-offset-2 focus-visible:outline-[#5cc7f5]`
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                        className={classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        `h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 
                        transition duration-200 ease-in-out`
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  Al seleccionar esto, usted manifiesta su acuerdo con nuestras políticas de privacidad
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#007991] px-3.5 py-2.5 text-center text-sm font-semibold 
                text-white shadow-sm hover:bg-[#3d94a5] focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-[#3d94a5]"
                onClick={handleClick}
              >
                Hablemos
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}


/*
  requiere los siguientes cambios en la configuracion:
  
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/