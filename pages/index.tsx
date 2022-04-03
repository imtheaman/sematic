import { NextPage } from "next";
import { Fragment } from "react";
import AppWrapper from "../components/AppWrapper";
import MainScreen from "../components/home/MainScreen";
import SideBar from "../components/home/SideBar";

const Home: NextPage = () => {
  return (
    <AppWrapper
      title="Sematic: Track your progress in the most efficient way."
      className="flex"
      anotherScreen={<SideBar />}
    >
      <MainScreen />
    </AppWrapper>
  );
};

export default Home;
