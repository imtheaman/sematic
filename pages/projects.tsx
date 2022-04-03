import { NextPage } from "next";
import AppWrapper from "../components/AppWrapper";
import MainScreen from "../components/projects/MainScreen";

const projects: NextPage = () => {
  return (
    <AppWrapper title="Sematic: All Projects" className="space-y-12">
      <MainScreen />
    </AppWrapper>
  );
};

export default projects;
