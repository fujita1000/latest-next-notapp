import { ReactNode } from "react";
import Aside from "./aside";
import Footer from './Footer'
import Header from './Header'
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
          <div className="flex h-[3000px]">       
            <main className="w-3/4">{children}</main>
              <div className="w-1/4">
                <Aside />
              </div>
          </div>
      <Footer/>
    </div>
  );
};

export default Layout

