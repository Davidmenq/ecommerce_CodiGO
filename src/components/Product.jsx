"use client"
import React from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from "../atoms/cartState"
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const Product = (product) => {
    const [cartItem, setCartItem] = useRecoilState(cartState);

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
        if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
            /* se crea un objeto newProduct con sintaxis ...product para copiar las propiedades del producto sin alterar su data original */
            /* se inicializa la cantidad en 1 de cada producto*/
            const newProduct = { ...product, quantity: 1 };
            /* setCartItem se usa para actualizar el estado del carrito */
            /* ...prevState crea un nuevo arreglo y agrega los nuevos productos con newProduct */
            setCartItem((prevState) => [...prevState, newProduct]);
        } else {
            setCartItem((prevState) => {
                return prevState.map((item) => {
                    return item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                });
            });
        }
        /* metodo para usar alertas como notificaciones */
        toast.success(`${product.title} Agregado al Carrito`);
    };



    return (
        <div key={product.id} className='bg-[#fff] pt-6 pb-4 shadow-2xl rounded-xl text-center'>

            <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
            >   
                {/* ? encademamiento opcional */}
                <img className="mx-auto w-[350px] h-[200px] object-contain" src={product.images?.[0]} alt="" />
                <a href={`${product.id}`}>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] 
                bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </a>
            </div>
            <div className='flex flex-col mt-4'>
                <div className='flex items-center flex-col text-[26px] w-full text-center'>
                    <h1>{product.title}</h1>
                    <h3 className='font-light'>$/{product.price}</h3>
                </div>
                {/* boton que ejecutará la funcián de agregar productos al carrito */}
                <button
                    className='bg-[#50C2D8] text-white py-4 my-auto px-10 mt-4 block mx-auto hover:bg-white hover:text-[#50C2D8] rounded-2xl border-[#50C2D8] border-2 ease-in-out duration-300'
                    onClick={addItemsToCart}>Agregar</button>
            </div>

        </div>
    )
}
export default Product