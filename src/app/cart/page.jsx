"use client"
import React from 'react'
import { cartState } from '@/atoms/cartState'
import { useRecoilState } from 'recoil'
import CartList from '@/components/CartList'
import { GiShoppingCart } from 'react-icons/gi'

const Cart = () => {
    

    const [cartItem, setCartItem] = useRecoilState(cartState);     
    const totalPrice = () => {        
        let total = 0
        cartItem.forEach(item => total += (item.price * item.quantity))
        return total
    }
    const createCheckoutSession = () => {

    }

    return (
        <div>
            <div className='container mx-auto p-10'>
                {cartItem.length <= 0 ? 
                <div className='flex flex-col gap-10'>
                    <h1 className='text-center text-4xl mt-32 font-normal'>Carro Vacio</h1>
                    <GiShoppingCart className='mx-auto h-[12vh] w-[12vw]' />
                </div> 
                : cartItem.map(item => <CartList key={item.id} data={item} />)}

                {cartItem.length > 0 && (<div>
                    <div className='flex flex-col lg:w-[20vw] mx-auto p-10 gap-5 text-center items-center rounded-2xl'>
                        <h2 className='text-[3vh] font-light'>Total: $/{totalPrice()}</h2>
                        <button className='bg-[#50C2D8] text-white py-4 px-10 mt-4 block mx-auto hover:bg-white hover:text-[#50C2D8] rounded-2xl border-[#50C2D8] border-2 ease-in-out duration-300 ' onClick={createCheckoutSession}>Pagar</button>
                    </div>
                </div>)}
                
            </div>
        </div>
    )
}

export default Cart