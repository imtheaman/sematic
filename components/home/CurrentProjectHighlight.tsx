import { faColonSign, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";
import { useRef } from "react";
import ModalOptions from "./ModalOptions";
import ProjectCard from "./ProjectCard";
import ProjectSlice from "./ProjectSlice";

const CurrentProjectHighlight: NextPage = () => {
  return (
    <div className="w-full flex flex-col space-y-8">
      {/* heading */}
      <div className="flex justify-between items-center">
        <h2 className="heading">Mobile Application Project</h2>
        <ModalOptions
          options={
            <ul className="w-60 flex justify-between items-center">
              <li className="link-hover">
                <Link href="#">Go to project</Link>
              </li>
              <li className="link-hover">
                <Link href="#">Progress insights</Link>
              </li>
            </ul>
          }
        >
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="text-blueish"
            fontSize={20}
          />
        </ModalOptions>
      </div>
      <ProjectSlice title="iOS development" percent={72} />
      <ProjectSlice title="ui/ux design" percent={100} />
    </div>
  );
};

export default CurrentProjectHighlight;
