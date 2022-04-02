import { NextPage } from "next";
import UserHeader from "./UserHeader";

const MainScreen: NextPage = () => {
  return (
    <div className="main-screen">
      <UserHeader />
    </div>
  );
};

export default MainScreen;
