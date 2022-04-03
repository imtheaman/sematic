import { NextPage } from "next";
import { Fragment } from "react";
import Contributions from "./Contributions";
import RecentActivity from "./RecentActivity";
import UserHeader from "./UserHeader";

const MainScreen: NextPage = () => {
  return (
    <Fragment>
      <UserHeader />
      <Contributions />
      <RecentActivity />
    </Fragment>
  );
};

export default MainScreen;
