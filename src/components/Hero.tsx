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
      {/* Efecto de iluminación en la parte inferior de la imagen */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
