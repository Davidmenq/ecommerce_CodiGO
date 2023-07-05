'use client'

import Card from '../../components/Card';
import React, { useEffect, useState } from 'react'

const Productos = () => {

    const [characters, setCharacters] = useState([]);
  
    const initialUrl= 'https://dummyjson.com/products';

    const fetchCharacters = (url:any) =>{
        fetch(url)
            .then(response => response.json())
            //.then(data => console.log(data.products))
            .then(data => {
                console.log(data.products)
                setCharacters(data.products)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, []
        
    )
  
    return (
    <div className='w-auto'>
        <h1 className='flex justify-center'>Productos</h1>
        <div className="flex flex-wrap justify-center align-middle">
          {characters.map((item,index) => (
            <Card key={item.id} id={item.id} title = {item.title} description = {item.description} image = {item.images[0]}/>
          ))}
        </div>
        
    </div>
  )
}

export default Productos