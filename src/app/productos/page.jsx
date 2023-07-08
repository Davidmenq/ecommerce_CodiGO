'use client'

import Card from '../../components/Card';
import React, { useEffect, useState } from 'react'

const Productos = () => {

    const [characters, setCharacters] = useState([]);
  
    const initialUrl= 'https://dummyjson.com/products?limit=100';
    const category1 = 'smartphones';
    const category2 = 'laptops';
    const category3 = 'automotive';
    const category4 = 'motorcycle';



    useEffect(() => {
        const fetchCharacters = (url) =>{
          fetch(url)
            .then(response => response.json())
            //.then(data => console.log(data.products))
            .then(data => {
                //console.log(data.products)
                setCharacters(data.products.filter(item=>item.category===category1 || item.category===category2 || item.category===category3 || item.category===category4))
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
            <Card key={index} id={item.id} title={item.title} price={item.price} images={item.images}/>
          ))}
        </div>  
    </div>
  )
}

export default Productos