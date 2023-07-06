'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const product = {
  description:
    `Pantalla más brillante Super Retina XDR de 6.1" con función Siempre encendida, que mantiene su información de un vistazo.
    Dynamic Island, una nueva forma mágica de interactuar con el iPhone.`,
  highlights: [
    'Dimensiones 160,7 x 77,6 x 7,9 mm (6,33 x 3,06 x 0,31 pulgadas)',
    'Pantalla LTPO Super Retina XDR OLED, 120 Hz, HDR10, Dolby Vision, 1000 nits (típico), 2000 nits (HBM)',
    'Apple A16 Bionic (4nm)',
    'iOS 16, actualizable a iOS 16.0.3',
    'Chip Fisico',
    '48 MP, f/1,8, 24 mm (gran angular), 1/1,28", 1,22 µm, PDAF de doble píxel, cambio de sensor OIS',
    'Selfie: 12 MP, f/1.9, 23 mm (ancho), 1/3.6", PDAF',
    'Li-Ion 4323 mAh',
    'SE EMITE BOLETA DE VENTA',
    'INCLUYE CARGADOR + CASE',
  ],
  details:
    `Pantalla más brillante Super Retina XDR de 6.1" con función Siempre encendida, que mantiene su información de un vistazo.
    Dynamic Island, una nueva forma mágica de interactuar con el iPhone.
    SOS de emergencia vía satélite y Crash Detection: funciones innovadoras diseñadas para salvar vidas.
    Cámara principal de 48MP con un sensor avanzado de cuatro píxeles para hasta 4 veces la resolución.
    Chip A16 Bionic: superrápido y supereficiente para una increíble duración de la batería durante todo el día.
    El Apple iPhone 14 Pro Max es el iPhone más grande y poderoso de la serie 14. Potenciado por el nuevo procesador Apple A16 Bionic, el iPhone 14 Pro Max cuenta con una pantalla OLED LTPO de 6.7 pulgadas con soporte always-on y un nuevo notch en forma de píldora que se integra a iOS con las notificaciones. La cámara trasera es triple y la cámara principal del conjunto es de 48MP con estabilización por sensor, sumando cámaras ultrawide y telefoto de 12MP. El iPhone 14 Pro Max soporta carga inalámbrica, resiste al polvo y agua, tiene parlantes stereo, soporta el sistema de mensajería de emergencia vía satélite de Apple y corre iOS 16.`,
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Producto = (props) => {
  
  const [producto, setProducto] = useState([]);
  const [imagen, setImagen] = useState([]);
  const url = `https://dummyjson.com/products/${props.params.id}`;
  const cargarDatos = async (urlApi: string) => {
    try {
      const respuesta = await fetch(urlApi);
      const datos = await respuesta.json();
      console.log(datos.images);
      console.log(datos);
      setProducto(datos);
      setImagen(datos.images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarDatos(url);
    console.log(props);
  }, []);

  return (
    <div className="bg-white">
      <div className='p-2 sm:px-6'>
        <strong>Detalles de Producto:</strong> {producto.title} / {producto.category} / {producto.description}
      </div>
      <div className="pt-6">
        <nav>
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li key='1'>
                <div className="flex items-center">
                  <a
                    href='/productos'
                    className="mr-2 text-sm font-medium text-gray-900"
                    >
                    {producto.category}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                    >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a
                  href='/#'
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {producto.title}
                </a>
              </li>
          </ol>
        </nav>

        {/* Image gallery */}
          <div className="grid grid-cols-2  mx-2 mt-6 gap-2 rounded-2xl 
                          sm:grid-cols-4 sm:px-6 sm:gap-x-6 sm:gap-y-6 
                          lg:grid lg:max-w-7xl lg:gap-x-8 lg:gap-y-2 lg:px-8
                          lg:overflow-hidden">
            {imagen.map((item,index) => (
              <img
                key={index}
                src={item}
                alt={item}
                className="h-full w-full object-cover object-center rounded-lg"
              />
            ))}
          </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {producto.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              $ {producto.price}.00 
            </p>
            <p className="text-2xl tracking-tight text-cyan-800">
              Stock  {producto.stock} unidades 
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    />
                  ))}
                </div>
                    {reviews.totalCount} Vistas
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#007991] px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                Agregar al carrito
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Características Principales</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Detalles</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
