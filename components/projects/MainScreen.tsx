import { NextPage } from "next";
import ProjectsList from "./ProjectsList";
import CurrentProjectInsights from "./CurrentProjectInsights";
import { Fragment } from "react";

const MainScreen: NextPage = () => {
  return (
    <Fragment>
      <CurrentProjectInsights />
      <ProjectsList />
    </Fragment>
  );
};

export default MainScreen;
