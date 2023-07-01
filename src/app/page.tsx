import Maps from '@/components/Maps';
import Product from '@/components/Product';
import data from '@/app/data/data.json';

import React from 'react';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between ">
      <section className='container w-[100vw] mt-5'>
        <h1 className='text-4xl mt-4 text-center'>Nuestros Productos</h1>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {data.map(product => <Product product={product} />)}
        </div>
      </section>
      <Maps />
    </main>
  )
}