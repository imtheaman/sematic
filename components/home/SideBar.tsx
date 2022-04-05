import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import ProfileCardsContainer from "./ProfileCardsContainer";
import ProfileHeading from "./ProfileHeading";
import TeamChatSmall from "./TeamChatSmall";

const SideBar: NextPage = () => {
  return (
    <div className="w-[28rem] h-[100vh] px-5 py-8 overflow-y-auto">
      {/* Profile header */}
      <div className="flex justify-between ">
        <h3 className="heading flex-grow">My Profile</h3>
        <button className="relative mt-2 text-violetish" title="Themes">
          <Fragment>
            <FontAwesomeIcon
              icon={faSquare}
              className="absolute top-0 left-0 animate-ping"
            />
            <FontAwesomeIcon
              className="absolute top-0 left-0"
              icon={faSquare}
            />
          </Fragment>
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
      <ProfileHeading
        heading="Recent Projects"
        options={
          <div className="w-12 link-hover">
            <Link href="#">See all</Link>
          </div>
        }
      />
      <ProfileCardsContainer />
      <TeamChatSmall />
    </div>
  );
};

export default SideBar;
