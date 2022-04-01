import { faColonSign, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectSlice from "./ProjectSlice";

const CurrentProjectHighlight: NextPage = () => {
    const projectOptionsRef = useRef(false)
  return (
    <div className="w-full flex flex-col space-y-8">
      {/* heading */}
      <div className="flex justify-between items-center">
        <h2 className="heading">Mobile Application Project</h2>
        <button onClick={() => projectOptionsRef.current}>
          <FontAwesomeIcon icon={faEllipsisV} color="#16365f" fontSize={20} />
        </button>
      </div>
      <ProjectSlice title="iOS development" percent={72} />
      <ProjectSlice title="ui/ux design" percent={100} />
    </div>
  );
};

export default CurrentProjectHighlight;
