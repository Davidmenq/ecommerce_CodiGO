"use client"
import React , {useState} from 'react'
import {useEffect} from 'react'
import { cartState } from '@/atoms/cartState'
import { useRecoilState } from 'recoil'
import CartList from '@/components/CartList'
import { GiShoppingCart } from 'react-icons/gi'
import axios from 'axios'
import { tokenState } from '@/atoms/tokenState'


const Cart = () => {

    const [cartItem, setCartItem] = useRecoilState(cartState); 
    /* metodo para calcular el total del carrito */    
    const totalPrice = () => {        
        let total = 0
        cartItem.forEach(item => total += (item.price * item.quantity))
        return total
    }
    // const createCheckoutSession = () => {

    // }
    const [token,setToken] = useRecoilState(tokenState)
      const pedidoUser = () => {
        const detallePedido = cartItem.map(item => ({
          productoId: item.id, // Reemplaza 'item.id' con la propiedad que corresponde al ID del producto en tu objeto 'item'
          cantidad: item.quantity, // Reemplaza 'item.cantidad' con la propiedad que corresponde a la cantidad en tu objeto 'item'
        }));
        console.log(detallePedido);
        if (detallePedido.length >= 2) {
          axios.post('http://127.0.0.1:5000/pedidos', {
            'detallePedido': detallePedido
          }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                console.log(response);
              }
            })
            .catch(function (error) {
              console.log(error, 'error');
              if (error.response && error.response.status === 401) {
                alert("Credenciales inválidas");
              }
            });
        } else {
          console.log("No hay suficientes elementos en el carrito para realizar el pedido.");
        }
      }

    return (
        <div className='min-h-screen'>
            <div className='container mx-auto  p-10'>
                {/* se usan operadores ternarios para probar si el carrito es mayor a 0 */}
                {cartItem.length <= 0 ? 
                <div className='flex flex-col gap-10'>
                    <h1 className='text-center text-4xl mt-32 font-normal'>Carro Vacio</h1>
                    <GiShoppingCart className='mx-auto h-[12vh] w-[12vw] lg:h-[24vh] lg:w-[24vw]' />
                </div> 
                : cartItem.map(item => <CartList key={item.id} data={item} />)}
                
                {/* se usa operador cortocircuito */}
                {/* && ejectará lo de la derecha si lo de la izquierda es verdadero */}
                {cartItem.length > 0 && (<div>
                    <div className='flex flex-col lg:w-[20vw] mx-auto p-10 gap-5 text-center items-center rounded-2xl'>
                        <h2 className='text-[3vh] font-light'>Total: $/{totalPrice()}</h2>
                        <button  onClick={() => pedidoUser()} className='bg-[#50C2D8] text-white py-4 px-10 mt-4 block mx-auto hover:bg-white hover:text-[#50C2D8] rounded-2xl border-[#50C2D8] border-2 ease-in-out duration-300 '>
                            Pagar
                            
                            </button>
                    </div>
                </div>)}
                
            </div>
        </div>
    )
}

export default Cart