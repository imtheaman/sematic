import {
  faEllipsisH,
  faPlus,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import ProfileCardsContainer from "./ProfileCardsContainer";
import ProfileHeading from "./ProfileHeading";
import TeamChatSmall from "./TeamChatSmall";

const SideBar: NextPage = () => {
  return (
    <div className="w-1/3 h-[100vh] px-5 py-8">
      {/* Profile header */}
      <div className="flex justify-between ">
        <h3 className="heading flex-grow">My Profile</h3>
        <button className="mt-2 relative">
          <FontAwesomeIcon
            icon={faSquare}
            color="#ff4a86"
            className="absolute top-0 left-0 animate-ping"
          />
          <FontAwesomeIcon
            className="absolute top-0 left-0"
            icon={faSquare}
            color="#ff4a86"
          />
        </button>
        <span className="ml-10">
          <Image
            src="/images/user2.jpg"
            width={36}
            height={36}
            className="rounded-md"
            objectFit="cover"
            objectPosition="center"
            alt="User profile"
          />
        </span>
      </div>

      {/* Profile cards */}
      <ProfileHeading heading="Recent Projects" />
      <ProfileCardsContainer />
      <TeamChatSmall />
    </div>
  );
};

export default SideBar;
