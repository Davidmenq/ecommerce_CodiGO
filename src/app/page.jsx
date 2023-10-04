"use client"
import Maps from '@/components/Maps';
import Product from '@/components/Product';
import { useEffect, useState } from 'react'
import BtnForm from "@/components/BtnForm";
import Hero from "@/components/Hero";
import React from 'react';
import SectionInstructions from '@/components/SectionInstructions';
import Carousel from '@/components/Carousel';

export default function Home() {

  /* characteres son los productos obtenidos de la api, tiene como valor iniciar "[]"
  y setCharacters servirá para actualizar el estado de characters */
  const [characters, setCharacters] = useState([]);

  /* url y categorias a filtrar */
  const initialUrl = 'https://ecommerce-api-backend-nlld.onrender.com/productos';
  const category1 = 'Telefonos';
  const category2 = 'Laptops';

  /* funcion que nos permite inicializar una sola vez fetchCharacteres */
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        /* filtro por categorias smartphone y laptops de la api */
        console.log(data);
        const products = data.filter(product => category1.includes(product.categoria.nombre) || category2.includes(product.categoria.nombre));
        //console.log(products)
        setCharacters(products)
      })
      /* catch para el manejo de errores */
      .catch(err => console.log(err))
  }


  return (
    <main className="flex w-full flex-col items-center justify-between ">
      <Hero
        titulo="Technology" 
        parrafo="Descubre lo último en tecnología y encuentra los mejores productos para llevar tu experiencia al siguiente nivel. ¡Bienvenido a nuestra tienda de productos tecnológicos!"
        rutaimg={"/imagenes/Hero8.png"}
        button={<BtnForm label="Ver productos" labelColor="white" ruta='/productos'/>}
      />
      <section className='container my-5 px-4'>
        <h1 className='text-4xl mt-4 text-center font-light'>Productos Destacados</h1>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* se imprime por medio de map los productos con el componente Product con los datos de la api  */}
          {characters.map((product) =>
          <Product key={product.id} stock={product.stock} id={product.id} title={product.nombre} price={product.precio} images={product.imagenes}/>)}
        </div>
      </section>
      <SectionInstructions />
      {/* <Carousel/> */}
      {/* <Maps /> */}
    </main>
  );
}
