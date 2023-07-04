import BtnForm from "@/components/BtnForm";
import Hero from "@/components/Hero";
//import Maps from "@/components/Maps";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        titulo="Technology" 
        parrafo="Somos una empresa líder en ventas de productos tecnologícos"
        rutaimg={"/imagenes/Hero8.png"}
        button={<BtnForm label="Ver productos" labelColor="white"/>}
      />
    {/* <Maps/>  */}

    </main>
  );
}
