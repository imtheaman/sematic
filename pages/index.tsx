import { NextPage } from "next";
import Head from "next/head";
import Logo from "../components/Logo";
import MainScreen from "../components/MainScreen";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sematic: Track your progress in the most efficient way.</title>
      </Head>

      <main className="bg-white flex relative shadow-xl max rounded-2xl min-h-[100vh] overflow-hidden">
        <Logo />
        <NavBar />
        <MainScreen />
        <SideBar />
      </main>
    </div>
  );
};

export default Home;
