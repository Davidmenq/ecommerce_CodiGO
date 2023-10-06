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
    <div className="flex flex-col h-auto w-auto justify-center items-center ">
      {data.map((item, i) => (
          <div key={i} className=" px-5 py-2.5 ">
            <div className="text-white text-lg font-bold flex justify-between items-center border-b-2 border-b-[#38697e] cursor-pointer " 
              onClick={()=>toggle(i)}
              >
              <h2>{item.tema}</h2>
              <span>{selected === i ?  '-' : '+'}</span>
            </div>
            <div className={selected === i 
              ?  'text-white h-auto max-h-fit transition-opacity ' 
              : 'text-white text-base max-h-0 overflow-hidden transition-opacity'
            }>
              {item.texto}
            </div>
          </div>
      ))}
    </div>
  );
};

export default AcordeonTailwind;

const data = [
  {
    tema: "Nuestra Empresa",
    texto:
      "Somos una empresa con amplia trayectoria en el rubro de tecnología. Nuestros 25 años de experiencia nos permiten conocer tus necesidades, para brindarte soluciones a tu medida, que mejoren y simplifiquen las experiencias de tus clientes.",
  },
  {
    tema: "Productos",
    texto:
      "Aprovechamos las nuevas tecnologías para encontrar soluciones duraderas para las necesidades actuales y futuras, y desarrollamos continuamente nuevos soluciones. Ofrecemos una gama completa de PC y tablets, monitores, accesorios, smartphones, soluciones de smart home y smart collaboration, realidad virtual y aumentada (AR/VR), Internet de las cosas (IoT) comercial, software, servicios y soluciones de centro de datos de infraestructura inteligente en todo el mundo.",
  },
  {
    tema: "Contactanos",
    texto:
      "Contáctanos y te ayudaremos con nuestros expertos en las consultas o dudas que tengas a través de nuestros canales de atención. ➤➤➤📞📱📲 Servicio al cliente: (01)999-999. ➤➤➤📧📧📧 email: servicioalcliente@tienda.com ➤➤➤📱🔋💻 Servicio Técnico: (01) 999-999",
  },

];


