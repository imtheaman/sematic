import { NextPage } from "next";
import Link from "next/link";
import ProjectLink from "./ProjectLink";

const ProjectsList: NextPage = () => {
  const data = {};
  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold text-blueish mb-12">
        All Projects
      </h1>
      <ul className="border-t">
        <ProjectLink name="iOS app development" completed={17} total={20} />
        <ProjectLink name="Ui/Ux design" completed={20} total={20} />
        <ProjectLink name="Frontend development" completed={16} total={20} />
        <ProjectLink name="Backend architechture" completed={12} total={20} />
        <ProjectLink name="database management" completed={5} total={20} />
        <ProjectLink name="iOS app development" completed={18} total={20} />
      </ul>
    </div>
  );
};

export default ProjectsList;
