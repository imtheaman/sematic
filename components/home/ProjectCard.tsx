import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { ProjectProps } from "./ProjectSlice";

const ProjectCard: NextPage<ProjectProps> = ({ title, percent, className }) => {
  const customStyle =
    percent >= 100
      ? "text-violetish bg-violet-100"
      : "text-orangish bg-orange-100";
  return (
    <div
      className={`bg-white flex max-w-80 flex-col justify-between shadow-md rounded-md h-36 px-6 py-4 card-animation`}
    >
      <div className="flex justify-between">
        <span className="text-gray-600 text-base mr-4">{title}</span>
        {percent >= 100 ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            fontSize={25}
            className="mt-2 text-violetish"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircle}
            fontSize={25}
            className="mt-2 text-orangish"
          />
        )}
      </div>
      <div className="flex font-semibold justify-between">
        <span
          className={`w-28 h-8 flex items-center justify-center ${customStyle} shadow-sm rounded-md`}
        >
          {percent >= 100 ? "Done" : "In Progress"}
        </span>
        <span className="text-gray-400">{percent}%</span>
      </div>
    </div>
  );
};

export default ProjectCard;
