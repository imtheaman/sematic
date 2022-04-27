import { NextPage } from "next";
import { ReactNode } from "react";
import Logo from "./home/Logo";
import NavBar from "./home/NavBar";

interface Props {
  className?: string;
  anotherComponent?: ReactNode;
}

const Layout: NextPage<Props> = ({ children, className, anotherComponent }) => {
  return (
    <div>
      {/*  */}
      <main className="bg-white flex relative shadow-xl rounded-2xl min-h-[100vh] overflow-hidden">
        <Logo />
        <NavBar />
        <div className={`main-screen relative ${className}`}>{children}</div>
        {anotherComponent}
      </main>
    </div>
  );
};

export default Layout;
