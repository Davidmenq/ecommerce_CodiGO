
import React from 'react'

const CartList = ({ data }) => {
    /* se desestructura data en propiedades */
    const { title, images, quantity, price } = data;
    


    return (
        <div>
            <div className="bg-[#fff] max-w-[800px] py-2 px-6 mx-auto lg:flex lg:flex-grow 
            justify-evenly text-center gap-8 items-center  shadow-2xl rounded-xl m-5">
                <img className="h-[150px] mx-auto lg:mx-0" src={images[0]} alt="" />
                <div>
                    <div className="font-normal text-2xl">{title}</div>
                    <div>Cantidad: {quantity}</div> 
                </div>
                <div className="text-3xl font-light">$/{price * quantity }</div>
            </div>
        </div>
    );
};

export default CartList