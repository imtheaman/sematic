import { NextPage } from "next";
import CurrentProjectInsights from "../components/projects/CurrentProjectInsights";
import ProjectsList from "../components/projects/ProjectsList";

const projects: NextPage = () => {
  return (
    <div className="space-y-10">
      <CurrentProjectInsights />
      <ProjectsList />
    </div>
  );
};

export default projects;
