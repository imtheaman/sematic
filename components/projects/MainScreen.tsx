import { NextPage } from "next";
import ProjectsList from "./ProjectsList";
import CurrentProjectInsights from "./CurrentProjectInsights";

const MainScreen: NextPage = () => {
  return (
    <div className="main-screen space-y-12">
      <CurrentProjectInsights />
      <ProjectsList />
    </div>
  );
};

export default MainScreen;
