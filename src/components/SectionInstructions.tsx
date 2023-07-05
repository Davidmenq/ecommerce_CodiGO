import React from "react";
import CardInstructivo from "./CardInstructivo";

const SectionInstructions = () => {
  return (
    <section className="container px-4 my-4">
      <h2 className="text-2xl font-bold text-center my-4">¿Cómo comprar?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CardInstructivo
          icon="/imagenes/computadora-de-escritorio.png"
          title="VER PRODUCTOS"
          description="Navega entre nuestras categorías y agrega los mejores productos a tu carrito de compras."
          altRename="Ver Productos"
        />
        <CardInstructivo
          icon="/imagenes/comprar-ahora.png"
          title="REALIZA TU PEDIDO"
          description="Revisa tu carrito de compras y realiza tu pedido. ¡Es muy fácil!"
          altRename="Realiza tu pedido"
        />
        <CardInstructivo
          icon="/imagenes/tarjeta-de-credito.png"
          title="REALIZA EL PAGO"
          description="Paga con cualquier tarjeta de crédito, débito y/o la billetera digital de tu preferencia"
          altRename="Realiza el pago"
        />
        <CardInstructivo
          icon="/imagenes/servicio-al-cliente.png"
          title="SOPORTE TÉCNICO"
          description="Contamos con soporte técnico para ayudarte con cualquier duda o inconveniente."
          altRename="Soporte Técnico"
        />
      </div>
    </section>
  );
};

export default SectionInstructions;
