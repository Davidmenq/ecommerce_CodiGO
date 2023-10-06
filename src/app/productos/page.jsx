'use client'

import Card from '../../components/Card';
import Product from '@/components/Product';
import React, { useEffect, useState } from 'react'

const Productos = () => {

    const [characters, setCharacters] = useState([]);
    const [charactersfiltered, setCharactersfiltered] = useState([]);
  
    const initialUrl= 'https://ecommerce-api-backend-nlld.onrender.com/productos';
    const category1 = 'Telefonos';
    const category2 = 'Laptops';
    const category3 = 'Case';
    const category4 = 'Impresoras';
    const category5 = 'Refrigeracion';
    const category6 = 'Monitores';

    useEffect(() => {
        const fetchCharacters = (url) =>{
          fetch(url)
            .then(response => response.json())
            //.then(data => console.log(data.products))
            .then(data => {
                console.log(data)
                setCharacters(data)
                setCharactersfiltered(data)
              })
            .catch(err => console.log(err))
        }

        fetchCharacters(initialUrl);
    }, [])
  
    return (
      <>
  
    <div className='sm:px-30 md:pl-30'>
        <h1 className='flex justify-center items-center text-2xl h-14'><u>Productos</u></h1>
      <section className='flex-col flex lg:flex lg:flex-row'>
      <ul className='flex  items-center  h-fit  overflow-auto space-x-2 md:justify-center lg:justify-start lg:space-y-2 lg:w-[190px] lg:h-[500px] lg:flex lg:flex-col lg:ml-6  '>
      <p className='hidden lg:text-center lg:mb-3 lg:mt-3 lg:font-bold lg:block'> CATEGORIAS</p>
      <button onClick={()=> {
       setCharacters(charactersfiltered)
      }} className='h-8 md:h-10 lg:h-8 bg-blue-200 rounded-md text-center'>
      <p className='w-[80px] lg:w-[140px]'>Todos</p>
      </button>

      <button className='h-8  md:h-10 lg:h-8 bg-blue-200 rounded-md text-center ' onClick={()=> {
       setCharacters(charactersfiltered)
        const productosFiltrados = charactersfiltered.filter(item=>item.categoria.nombre==="Laptops")
        setCharacters(productosFiltrados)
      }}>
      <p className='w-24 lg:w-[140px]' > Laptops</p>
      </button>

      <button className='h-8 md:h-10 lg:h-8 bg-blue-200 rounded-lg text-center' onClick={()=> {
        setCharacters(charactersfiltered)
        const productosFiltrados = charactersfiltered.filter(item=>item.categoria.nombre==="Telefonos")
        setCharacters(productosFiltrados)
      }}>
      <p className='w-24 lg:w-[140px]'> Telefonos</p>
      </button>
      <button className='h-8 md:h-10 lg:h-8 bg-blue-200 rounded-md text-center' onClick={()=> {
        setCharacters(charactersfiltered)
        const productosFiltrados = charactersfiltered.filter(item=>item.categoria.nombre==="Monitores")
        setCharacters(productosFiltrados)
      }}>
      <p className='w-24 lg:w-[140px]'> Monitores</p>
      </button>
      <button className='h-8  md:h-10 lg:h-8 bg-blue-200 rounded-md text-center' onClick={()=> {
        setCharacters(charactersfiltered)
        const productosFiltrados = charactersfiltered.filter(item=>item.categoria.nombre==="Case")
        setCharacters(productosFiltrados)
      }}>
      <p className='w-24 lg:w-[140px]'> Case</p>
      </button>
      <button className='h-8 md:h-10 lg:h-8 bg-blue-200 rounded-md text-center' onClick={()=> {
        setCharacters(charactersfiltered)
        const productosFiltrados = charactersfiltered.filter(item=>item.categoria.nombre==="Refrigeracion")
        setCharacters(productosFiltrados)
      }}>
      <p className='w-[120px] lg:w-[140px]'> Refrigeracion</p>
      </button>
      <button className='h-8 md:h-10 lg:h-8 bg-blue-200 rounded-md text-center' onClick={()=> {
        setCharacters(charactersfiltered)
        const productosFiltrados = charactersfiltered.filter(item=>item.categoria.nombre==="Impresoras")
        setCharacters(productosFiltrados)
      }}>
      <p className='w-24 lg:w-[140px]'> Impresoras</p>
      </button>
      </ul>
 
        <div className="w-[100%] place-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {characters.map((item,index) => (
            <Card key={index} id={item.id} title={item.nombre} price={item.precio} images={item.imagenes}/>
          ))}
        </div>  

        </section>
    </div>
    </>
  )
}

export default Productos