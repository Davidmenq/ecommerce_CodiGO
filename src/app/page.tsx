import BtnForm from "@/components/BtnForm";
import Hero from "@/components/Hero";
import Maps from "@/components/Maps";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero
        titulo="Technology Store"
        parrafo="Descubre lo último en tecnología y encuentra los mejores productos para llevar tu experiencia al siguiente nivel. ¡Bienvenido a nuestra tienda de productos tecnológicos!"
        rutaimg={"/imagenes/Hero8.png"}
        button={<BtnForm label="Ver productos" labelColor="white" />}
      />
    </main>
  );
}
