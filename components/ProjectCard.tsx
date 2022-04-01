import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { ProjectProps } from "./ProjectSlice";

const ProjectCard: NextPage<ProjectProps> = ({ title, percent, className }) => {
  return (
    <div className="bg-white flex flex-col justify-between shadow-md rounded-md h-36 px-6 py-4 card-animation">
      <div className="flex">
        <span className="text-gray-600 text-base mr-4">{title}</span>
        {percent >= 100 ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            color="#ff4a86"
            fontSize={25}
            className="mt-2"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircle}
            fontSize={25}
            color="#784af5"
            className="mt-2"
          />
        )}
      </div>
      <div className="flex font-semibold justify-between">
        <span
          className={`w-28 h-8 flex items-center justify-center ${
            percent >= 100
              ? "text-pinkish bg-pink-100"
              : "text-violetish bg-violet-100"
          } rounded-md`}
        >
          {percent >= 100 ? "Done" : "In Progress"}
        </span>
        <span className="text-gray-400">{percent}%</span>
      </div>
    </div>
  );
};

export default ProjectCard;
