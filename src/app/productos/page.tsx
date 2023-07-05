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

    const fetchCharacters = (url:string) =>{
        fetch(url)
            .then(response => response.json())
            //.then(data => console.log(data.products))
            .then(data => {
                console.log(data.products)
                setCharacters(data.products.filter(item=>item.category===category1 || item.category===category2 || item.category===category3 || item.category===category4))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, [])
  
    return (
    <div className='w-auto'>
        <h1 className='flex justify-center'>Productos</h1>
        <div className="flex flex-wrap justify-center align-middle">
          {characters.map((item,index) => (
            <Card key={item.id} id={item.id} title={item.title} description={item.description} image={item.images[0]}/>
          ))}
        </div>  
    </div>
  )
}

export default Productos