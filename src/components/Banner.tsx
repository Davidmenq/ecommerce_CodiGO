import { FC, ReactElement } from "react";
import Image from "next/image";

interface Props {
  titulo: string;
  parrafo: string;
  rutaimg: string;
  button: ReactElement;
}

const Banner: FC<Props> = ({ titulo, parrafo, rutaimg, button }) => {
  return (
    <div>
      <Image
        className="w-full h-96 absolute"
        src={rutaimg}
        alt="image banner "
        width={500}
        height={800}
        priority
      />
      <div className="flex flex-col justify-between w-fit z-0 h-80 p-2 relative ml-4 mt-4 ">
        <h1 className="text-2xl mt-10 text-white font-bold font-mono">
          {titulo}
        </h1>
        <p className=" w-32 mt-7 text-white font-mono text-base">{parrafo}</p>
        {button}
      </div>
    </div>
  );
};

export default Banner;
