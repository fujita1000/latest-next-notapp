import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.css";

const Header = () => {
  useEffect(() => {}, []);

  return (
    <header className="h-[150px] w-full bg-main relative">
      <nav className="p-2">
        <ul className="flex items-center ">
          <Link href="/">
            <li className="flex">
              <Image src="/logo1.png" width={125} height={125} alt="logo" />
              <p className={styles.header_logo}>eSports Cluster</p>
            </li>
          </Link>
          <li className="ml-5 text-[40px]">
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li className="ml-5 text-[40px]">
            <Link href="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="ml-5 text-[40px]">
            <Link href="/test" className="text-white">
              Test
            </Link>
          </li>
          <li className="absolute right-[50px]">
            <Image src="/find.png" width={75} height={75} alt="検索" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
