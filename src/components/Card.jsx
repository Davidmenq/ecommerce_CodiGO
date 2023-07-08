'use client'
import React from 'react';

import { useRecoilState } from 'recoil';
import { cartState } from "../atoms/cartState"
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const Card = (props) => {

  const [cartItem, setCartItem] = useRecoilState(cartState)

  useEffect(() => {
    // Obtener los datos del carrito guardados previamente
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItem(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Guardar el estado del carrito en el almacenamiento local cada vez que cambie
    localStorage.setItem('cart', JSON.stringify(cartItem));
  }, [cartItem]);


  /* cartItem almacena el estado del carrito
    mientras que serCartItem actualiza este estado
    y cartState proviene de un atomo que sera el estado inicial  */  

  /* funcion para agregar productos al carrito */
  const addItemsToCart = () => {
    /* compara el id del producto actual con el producto que se esta agregando */
    /* sino encuentra coincidencia, devuelve -1 y ejecuta lo que esta dentro del if*/
    if (cartItem.findIndex((pro) => pro.id === props.id) === -1) {
      /* se crea un objeto newProduct con sintaxis ...product para copiar las propiedades del producto sin alterar su data original */
      /* se inicializa la cantidad en 1 de cada producto*/
      const newProduct = { ...props, quantity: 1 };
      /* setCartItem se usa para actualizar el estado del carrito */
      /* ...prevState crea un nuevo arreglo y agrega los nuevos productos con newProduct */
      setCartItem((prevState) => [...prevState, newProduct]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === props.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }
    /* metodo para usar alertas como notificaciones */
    toast.success(`${props.title} Agregado al Carrito`);
  };

  return (
    <div key={props.id} className="flex h-100 m-3">
      <div className="flex flex-col justify-between rounded-lg bg-white drop-shadow-2xl shadow-slate-400 
                    dark:bg-neutral-700">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img className="mx-auto w-[350px] h-[200px] object-contain" src={props.images[0]} alt="" />
          <a href={`${props.id}`}>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] 
                bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl text-center font-medium text-neutral-800 dark:text-neutral-50">
            {props.title}
          </h5>
          <p className="mb-4 text-lg text-center text-neutral-600 dark:text-neutral-200">
            ${props.price}.00 dólares
          </p>

        </div>
        <button
          type="button"
          className=" mb-0 w-full h-20 rounded-b-md  bg-[#007991] px-6 pb-2 pt-2.5 text-xs font-medium uppercase 
             text-white shadow-[0_4px_9px_-4px_#3b71ca]  
            hover:shadow-cyan-300"
          data-te-ripple-init
          data-te-ripple-color="light" onClick={addItemsToCart}
        >
          Agregar al carrito
        </button>
      </div>

    </div>
  );
};

export default Card;
