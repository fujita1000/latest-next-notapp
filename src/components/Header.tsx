import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  useEffect(() => {}, []);

  return (
    <header>
      <div className="mt-[10px]">
        <Image src={"header.svg"} width={800} height={200} alt="header" />
      </div>
    </header>
  );
};

export default Header;
