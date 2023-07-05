'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Producto = (props) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  //const [selectedSize, setSelectedSize] = useState(product.sizes[2])

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
      <div>
        Detalles de Producto: {producto.title} / {producto.category} / {producto.description}
          
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

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Vistas</h3>
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
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

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
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

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
