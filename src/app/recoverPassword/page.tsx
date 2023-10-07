"use client";
import BtnForm from "@/components/BtnForm";
import ImageForm from "@/components/ImageForm";
import InputDatos from "@/components/InputDatos";
import Links from "@/components/Links";
import PrincipalFontForm from "@/components/PrincipalFontForm";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import React from "react";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleClick = (event: any) => {
    event.preventDefault();

    console.log(`${email}`);

    axios
      .post("https://ecommerce-api-backend-nlld.onrender.com/recuperar-contrasena", {
        email: email,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log("El mensaje fue enviado con exito");
        }
      })
      .catch(function (error) {
        console.log(error, "error");
        if (error.response && error.response.status === 401) {
          alert("No se envio el mensaje, vuelva a intentarlo por favor");
        }
      });
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row p-2 justify-center my-10">
      <div className="flex flex-grow p-2 md:hidden">
        <Links ruta={"/login"} label={"Iniciar Sesión"} labelColor={""}></Links>
        <Links
          ruta={"/recoverPassword"}
          label={">Recuperar"}
          labelColor={""}
        ></Links>
      </div>
      <div className="hidden lg:block rounded-l-xl shadow-2xl lg:w-[40vw] relative hover:brightness-90 ease-in-out duration-300">
        <div className="flex h-full w-full">
          <h1 className="relative glow-effect text-4xl font-bold tracking-tight text-white sm:text-6xl z-10 my-auto mx-auto">
            Tech Store
          </h1>
          <img
            src={"/imagenes/rec-img.webp"}
            alt="Productos Tecnológicos"
            className="absolute inset-0 -z-10 h-full w-full object-cover fade-in rounded-l-xl"
          />
        </div>
      </div>
      <div className=" flex flex-col bg-[#fff] text-center py-5 rounded-r-lg shadow-2xl">
        <PrincipalFontForm
          contenido={"Recuperar Contraseña"}
          color={"#50C2D8"}
        ></PrincipalFontForm>
        <ImageForm ruta="/imagenes/imagen2.webp"></ImageForm>
        <form className="w-[90vw] sm:w-[42vw] m-auto p-4 md:p-10 py-8 flex flex-col rounded-xl">
          <section className="flex flex-col  justify-center lg:px-16 xl:px-40 py-5 hover:scale-105 ease-in-out duration-300">
            <label className="flex text-[#50C2D8] font-light justify-start py-4">
              Correo
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1px] border-[#50C2D8] rounded-md shadow-lg"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            />
            <button
                type="submit"
                className="block w-full rounded-md bg-[#007991] px-3.5 py-2.5 text-center text-sm font-semibold my-5
                text-white shadow-sm hover:bg-[#3d94a5] focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-[#3d94a5]"
                onClick={handleClick}
              >
                Enviar
              </button>
          </section>
        </form>
        <div className="flex flex-grow justify-center p-4">
          <p className="text-black">¿Recuperaste tu cuenta?</p>
          <Links
            ruta={"/login"}
            label={"Ingresar"}
            labelColor={"#2C5364"}
          ></Links>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
