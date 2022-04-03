import Head from "next/head";
import Logo from "../components/home/Logo";
import NavBar from "../components/home/NavBar";
import MainScreen from "../components/insights/MainScreen";

const insights = () => {
  return (
    <div>
      <Head>
        <title>Sematic: Track your progress in the most efficient way.</title>
      </Head>
      {/* Maintenace mode */}
      <div className="p-3 bg-yellow-500 rounded-lg animate-bounce text-[#fff] mt-2 inline absolute top-0 right-[3rem]">
        In Live Maintenance
      </div>
      <main className="bg-white flex relative shadow-xl rounded-2xl min-h-[100vh] overflow-hidden">
        <Logo />
        <NavBar />
        <MainScreen />
      </main>
    </div>
  );
};

export default insights;
