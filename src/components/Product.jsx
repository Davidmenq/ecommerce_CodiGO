"use client"
import React from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from "../atoms/cartState"
import toast from 'react-hot-toast';

const Product = ({ product }) => {

    const [cartItem, setCartItem] = useRecoilState(cartState)

    const addItemsToCart = () => {

        if (cartItem.findIndex(pro => pro.id === product.id) === -1) {
            setCartItem(prevState => [...prevState, product])
        } else {
            setCartItem(prevState => {
                return prevState.map((item) => {
                    return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            })
        }
        /* se usa una libreria de notificaciones */
        toast.success(`${product.name} Agregado al Carrito`)
    }

    return (
        <div className='bg-[#fff] pt-6 pb-4 shadow-2xl rounded-xl'>

            <img className='mx-auto w-[350px] h-[200px] object-contain' src={product.images[0]} alt="" />

            <div className='mt-4 px-6'>
                <div className='flex items-center flex-col text-[26px]'>
                    <h1>{product.title}</h1>
                    <h3 className='font-light'>S/{product.price}</h3>
                </div>
                <button
                    className='bg-[#50C2D8] text-white py-4 px-10 mt-4 block mx-auto hover:bg-white hover:text-[#50C2D8] rounded-2xl border-[#50C2D8] border-2 ease-in-out duration-300'
                    onClick={addItemsToCart}>Agregar</button>
            </div>

        </div>
    )
}
export default Product