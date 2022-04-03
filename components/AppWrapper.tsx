import { NextPage } from "next";
import Head from "next/head";
import Logo from "./home/Logo";
import NavBar from "./home/NavBar";

interface Props {
  title: string;
  className?: string;
  anotherScreen?: JSX.Element;
}

const AppWrapper: NextPage<Props> = ({
  children,
  title,
  className,
  anotherScreen,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="p-3 bg-violet-500 w-full text-[#fff] mt-1 left-0 absolute top-0">
        {/* @ts-ignore */}
        <marquee>
          This site is in live creation, please check this site 24hrs. later!
          {/* @ts-ignore */}
        </marquee>
      </div>
      <main className="bg-white flex relative shadow-xl rounded-2xl min-h-[100vh] overflow-hidden">
        <Logo />
        <NavBar />
        <div className={`main-screen relative ${className}`}>{children}</div>
        {anotherScreen}
      </main>
    </div>
  );
};

export default AppWrapper;
