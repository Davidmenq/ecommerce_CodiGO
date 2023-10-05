'use client'

import Card from '../../components/Card';
import React, { useEffect, useState } from 'react'

const Productos = () => {

    const [characters, setCharacters] = useState([]);
  
    const initialUrl= 'https://ecommerce-api-backend-nlld.onrender.com/productos';
    const category1 = 'Telefonos';
    const category2 = 'Laptops';
    const category3 = 'Cases';
    const category4 = 'Impresoras';
    const category5 = 'Cooler Refrigeracion';
    const category6 = 'Monitores';

    useEffect(() => {
        const fetchCharacters = (url) =>{
          fetch(url)
            .then(response => response.json())
            //.then(data => console.log(data.products))
            .then(data => {
                console.log(data)
                setCharacters(data.filter(item=>item.categoria.nombre===category1 || item.categoria.nombre===category2 || item.categoria.nombre===category3 || item.categoria.nombre===category4|| item.categoria.nombre===category5 || item.categoria.nombre===category6))
            })
            .catch(err => console.log(err))
        }

        fetchCharacters(initialUrl);
    }, [])
  
    return (
    <div className='sm:px-30 md:px-40 lg:px-50'>
        <h1 className='flex justify-center items-center text-2xl h-14'><u>Productos</u></h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {characters.map((item,index) => (
            <Card key={index} id={item.id} title={item.nombre} price={item.precio} images={item.imagenes}/>
          ))}
        </div>  
    </div>
  )
}

export default Productos