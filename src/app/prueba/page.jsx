"use client"
import React, { useEffect, useState } from 'react';

const Prueba = () => {

 let data = [{
     "nombre":"Stefano",
     "apellido":"Zevallos" 
  },
  {
    "nombre":"Ingrid",
    "apellido":"Nayeli" 
 }]

  useEffect(() => {
   console.log(data);
   let probando = {...data[0], nickname :"fanito"}
   console.log(probando);
  }, []);


  return (
    <div>
      sdfds
    </div>
  );
};

export default Prueba;