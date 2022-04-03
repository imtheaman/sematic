import { NextPage } from "next";
import Contributions from "./Contributions";
import RecentActivity from "./RecentActivity";
import UserHeader from "./UserHeader";

const MainScreen: NextPage = () => {
  return (
    <div className="main-screen space-y-10">
      <UserHeader />
      <Contributions />
      <RecentActivity />
    </div>
  );
};

export default MainScreen;
