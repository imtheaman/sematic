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
      {/* Maintenace mode */}
      <div className="p-3 bg-yellow-500 rounded-lg animate-bounce text-[#fff] mt-2 inline absolute top-0 right-[3rem]">
        In Live Maintenance
      </div>

      <main className="bg-white flex relative shadow-xl rounded-2xl min-h-[100vh] overflow-hidden">
        <Logo />
        <NavBar />
        <div className={`main-screen ${className}`}>{children}</div>
        {anotherScreen}
      </main>
    </div>
  );
};

export default AppWrapper;
