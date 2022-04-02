import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import Logo from "../components/home/Logo";
import MainScreen from "../components/home/MainScreen";
import NavBar from "../components/home/NavBar";
import SideBar from "../components/home/SideBar";

const Home: NextPage = () => {
  const maintenanceRef = useRef(100);
  useEffect(() => {
    const timer = setInterval(() => (maintenanceRef.current += 100));
  });
  const bg = "bg-red-" + maintenanceRef.current;
  return (
    <div>
      <Head>
        <title>Sematic: Track your progress in the most efficient way.</title>
      </Head>
      {/* Maintenace mode */}
      <div className="p-3 bg-yellow-500 rounded-lg animate-ping text-[#fff] mt-2 inline absolute top-0 right-[3rem] rotate-45">
        In Live Maintenance
      </div>

      <main className="bg-white flex relative shadow-xl rounded-2xl min-h-[100vh] overflow-hidden">
        <Logo />
        <NavBar />
        <MainScreen />
        <SideBar />
      </main>
    </div>
  );
};

export default Home;
