import { NextPage } from "next";
import { Fragment } from "react";
import ProjectCard from "./ProjectCard";
import ProjectSliceInfo from "./ProjectSliceInfo";

export interface ProjectProps {
  className?: string;
  title: string;
  percent: number;
}

const ProjectSlice: NextPage<ProjectProps> = (props) => {
  return (
    <Fragment>
      <ProjectSliceInfo {...props} />
      <div className="grid gap-6 grid-cols-3 w-full">
        <ProjectCard percent={80} title="Create a new database for project A" />
        <ProjectCard
          percent={100}
          title="Create a new database for project A"
        />
        <ProjectCard
          percent={100}
          title="Create a new database for project A"
        />
      </div>
    </Fragment>
  );
};

export default ProjectSlice;
