import BtnForm from "@/components/BtnForm";
import Banner from "@/components/Banner";
import Maps from "@/components/Maps";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Banner
        titulo="Technology" 
        parrafo="Somos una empresa líder en ventas de productos tecnologícos"
        rutaimg={"/imagenes/imgbanner.png"}
        button={<BtnForm label="Ver productos" labelColor="white"/>}
      />
    {/* <Maps/>  */}
    </main>
  );
}
