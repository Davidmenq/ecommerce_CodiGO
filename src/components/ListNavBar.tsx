import { FC, useState } from "react";
import Link from "next/link";

interface Props {
  nameSection: string;
  onClickReturn: () => void;
  url: string;
}

const ListNavBar: FC<Props> = ({ nameSection, onClickReturn, url }) => {
  /* UseState -> used for am amimation of line in the section list*/

  const [hovered, setHovered] = useState(false);
  return (
    <li
      className="text-xl uppercase text-white py-4 px-6 text-center border-b-2 lg:border-b-0  hover:bg-[#20C7F0]  border-[#20C7F0] lg:hover:text-[#69C7F0] lg:hover:bg-transparent lg:relative font-extralight"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={url} onClick={onClickReturn}>
        {nameSection}
      </Link>
      {hovered && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e11661] animate-line-animation"></span>
      )}
    </li>
  );
};

export default ListNavBar;
