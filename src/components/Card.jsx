'use client'
import React from 'react';

const Card = (props) => {
  return (
    <div key={props.id} className="flex h-100 m-3">
      <div className="flex flex-col justify-between rounded-lg bg-white drop-shadow-2xl shadow-slate-400 
                    dark:bg-neutral-700">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img className="rounded-t-lg" src={props.image} alt="" />
          <a href= {`${props.id}`}>
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
            data-te-ripple-color="light"
          >
            Agregar al carrito
          </button>
      </div>

    </div>
  );
};

export default Card;
