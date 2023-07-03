"use client"
import Maps from '@/components/Maps';
import Product from '@/components/Product';
/* import data from '@/app/data/data.json'; */
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react'

import React from 'react';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  /* url y categorias a filtrar */
  const initialUrl= 'https://dummyjson.com/products';
  const category1 = 'smartphones';
  const category2 = 'laptops';

  const fetchCharacters = (url:any) =>{
    fetch(url)
        .then(response => response.json())        
        .then(data => {            
            /* filtro por categorias smartphone y laptops de la api */
            const products = data.products.filter((product: { category: string }) => category1.includes(product.category) || category2.includes(product.category));            
            console.log(products)
            setCharacters(products)                      
        })
        .catch(err => console.log(err))
  }  
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  

  return (
    <main className="flex w-full flex-col items-center justify-between ">
      <section className='container w-[100vw] mt-5'>
        <h1 className='text-4xl mt-4 text-center font-light'>Nuestros Productos</h1>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {characters.map(characters => <Product product={characters} />)}
        </div>
      </section>
      <Maps />
      <Footer/>
    </main>
  )
}