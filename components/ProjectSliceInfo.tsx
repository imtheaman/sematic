import { NextPage } from "next";
import Image from "next/image";
import { ProjectProps } from "./ProjectSlice";
import UserImagesOverlay from "./UserImagesOverlay";

const ProjectSlicInfo: NextPage<ProjectProps> = ({ title, percent }) => {
  return (
    <div className="flex mb-4 items-center">
      <UserImagesOverlay
        imgArray={[
          "/images/user2.jpg",
          "/images/user.jpg",
          "/images/user2.jpg",
          "/images/user.jpg",
        ]}
        alt="people working on this project"
        size='40px'
      />
      <div className="flex justify-between flex-grow">
        <h3 className="ml-4 mb-2 text-gray-500">{title}</h3>
        <span className="font-semibold text-gray-400">{percent}% Progress</span>
      </div>
    </div>
  );
};

export default ProjectSlicInfo;
