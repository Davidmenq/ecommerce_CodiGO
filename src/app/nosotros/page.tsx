'use client'
import React from 'react'
import Image from 'next/image'

const page = () => {

  return (
    <section className='flex flex-col mx-4 my-4 gap-10'>

      <section
        className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 className="text-2xl font-bold text-gray-600 md:text-3xl">
              Nuestra cultura ganadora nos motiva a trabajar en equipo
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Seguiremos siendo tu aliado, ofreciéndote soluciones más efectivas 
              y simples que ayuden al crecimiento de tu negocio.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="/contactanos"
                className="inline-block rounded bg-[#3d94a5] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#4db7cc]"
              >
                Hablemos como Equipo
              </a>
            </div>
          </div>
        </div>
        <Image
          alt="Imagen de la empresa"
          src="/imagenes/technology_1280.jpg"
          width={500}
          height={400}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-l-[30px] 
          md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] "
        />
      </section>
      
      <section className='flex flex-col sm:flex-row pt-10'>

        <article className="rounded-3xl bg-white p-4 ring ring-[#70dff5] sm:w-1/2 sm:mx-10 sm:p-6 sm:my-auto">
            <div className='flex flex-col justify-between py-4'>
              <h3 className="mb-4 text-[#70dff5] text-2xl font-medium sm:text-4xl text-center">
                Nuestro propósito
              </h3>
              <p className="mt-1 text-gray-500 text-center">
              Estamos comprometidos a impulsar el bienestar de nuestros clientes, 
              generar valor reinventando experiencias y mejorando la manera de hacer negocios. 
              Nuestra promesa es brindar un apoyo cercano a través 
              de tecnología e innovación. 
              </p>
            </div>        
        </article>
        <div className='items-center sm:w-1/2'>
          <div className='h-fit font-light text-3xl text-gray-900 px-6 pt-16 sm:py-0 text-center italic  sm:px-24 '>
                "Creemos juntos grandes experiencias, generando 
                oportunidades únicas para ti y tus clientes".
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="px-8 text-center text-3xl text-gray-600 font-bold tracking-tight sm:text-5xl">
            Testimonios de nuestros Socios de Negocio
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Socio de negocio 1"
                  src="/imagenes/01H_640.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-[#5cc7f5] text-xl">
                    ★★★★★
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-700">ANTONIO CHAVEZ</p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">Presidente y Fundador</p>
              <p className="line-clamp-2 sm:line-clamp-none mt-0 text-gray-600">Nidux</p>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                En TECHNOLOGY hemos encontrado un socio estratégico que ha habilitado nuestro desarrollo a gran escala. 
                Gracias a TECHNOLOGY ahora tenemos una presencia online consolidada.
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Socio de negocio 2"
                  src="/imagenes/02H_640.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-[#5cc7f5] text-xl">
                    ★★★★★
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-700">SERGIO ALTMANN</p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">Director General</p>
              <p className="line-clamp-2 sm:line-clamp-none mt-0 text-gray-600">Adidas</p>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                TECHNOLOGY ha demostrado ser un equipo profesional, confiable, altamente capacitado y receptivo, 
                que se apropia de la meta como si fuera parte de la organización.
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="/imagenes/03H_640.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-[#5cc7f5] text-xl">
                    ★★★★★
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-700">MARTHA MENDEZ</p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">President & CEO</p>
              <p className="line-clamp-2 sm:line-clamp-none mt-0 text-gray-600">DTS World Cargo</p>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                TECHNOLOGY ha demostrado ser un aliado confiable que se pone 
                la camiseta para alcanzar los objetivos mas ambiciosos de nuestra empresa.
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </section>
  )
}

export default page