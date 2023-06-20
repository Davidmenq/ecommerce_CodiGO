'use client'

import { useState } from 'react';

const AcordeonTailwind = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className="flex h-auto w-screen justify-center items-center">
      <div className="w-auto">
        {data.map((item, i) => (
          <div className=" px-5 py-2.5 bg-[#0F2027]">
            <div className="text-white flex justify-between items-center border-b-2 cursor-pointer" onClick={()=>toggle(i)}>
              <h2>{item.tema}</h2>
              <span>{selected === i ?  '-' : '+'}</span>
            </div>
            <div className={selected === i 
              ?  'text-white h-auto max-h-[9999px] transition-all duration-[0.5s] ease-[cubic-bezier(1,0,1,0)]' 
              : 'text-white max-h-0 overflow-hidden transition-all duration-[0.5s] ease-[cubic-bezier(0,1,0,1)]'}>
              {item.texto}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcordeonTailwind;

const data = [
  {
    tema: "Nuestra Empresa",
    texto:
      "Hola, esta es la data 1. Si quieres saber mas sobre como se debe conseguir mas informacion llamame por el dia, te contestare apenas me sea posible",
  },
  {
    tema: "Productos",
    texto:
      "Hola, esta es la data 2. Si quieres saber mas sobre como se debe conseguir mas informacion llamame por el dia, te contestare apenas me sea posible",
  },
  {
    tema: "Contactanos",
    texto:
      "Hola, esta es la data 3. Si quieres saber mas sobre como se debe conseguir mas informacion llamame por el dia, te contestare apenas me sea posible",
  },

];


