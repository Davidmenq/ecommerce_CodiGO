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
    <>
    <h1 className='flex justify-center'>Productos</h1>
        <div>
            <Card characters = {characters}/>
        </div>
    </>
  )
}

export default Productos