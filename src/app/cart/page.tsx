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
            <div className='container mx-auto'>
                {cartItem.length <= 0 ? 
                <div className='flex flex-col gap-10'>
                    <h1 className='text-center text-4xl mt-32 font-normal'>Carro Vacio</h1>
                    <GiShoppingCart className='mx-auto h-[12vh] w-[12vw]' />
                </div> 
                : cartItem.map(item => <CartList key={item} data={item} />)}

                {cartItem.length > 0 && (<div>
                    <h2>Total: S/{totalPrice()}</h2>
                    <button onClick={createCheckoutSession}>CheckOut</button>
                </div>)}
                
            </div>
        </div>
    )
}

export default Cart