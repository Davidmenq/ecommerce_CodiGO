import { FC, ReactElement } from "react";

interface Props {
  titulo: string;
  parrafo: string;
  rutaimg: string;
  button: ReactElement;
}

const Hero: FC<Props> = ({ titulo, parrafo, rutaimg, button }) => {
  return (
    <div className="relative isolate overflow-hidden pt-8 w-full">
      <img
        src={rutaimg}
        alt="Productos Tecnológicos"
        className="absolute inset-0 -z-10 h-full w-full object-cover fade-in"
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
        <div className="text-center">
          <h1 className="glow-effect text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {titulo}
          </h1>
          <p className="typing mt-9 px-7 text-xl font-medium leading-8 text-white lg:px-0 lg:drop-shadow-xl">
            {parrafo}
          </p>
          <div className="efectButon mt-10 flex items-center justify-center gap-x-6">
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
