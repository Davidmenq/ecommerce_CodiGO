'use client'

import Card from '../../components/Card';
import React, { useEffect, useState } from 'react'

const Productos = () => {

    const [characters, setCharacters] = useState([]);
  
    const initialUrl= 'https://rickandmortyapi.com/api/character';

    const fetchCharacters = (url:any) =>{
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data.results) )  //console.log(data.results))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, []
        
    )
  
    return (
    <>
    <h1>Productos</h1>
        <div>
            <Card characters = {characters}/>
        </div>
    </>
  )
}

export default Productos