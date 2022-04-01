import { NextPage } from "next";
import { Fragment } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import ProfileHeading from "./ProfileHeading";
import UserImagesOverlay from "./UserImagesOverlay";

const TeamChatSmall: NextPage = () => {
  return (
    <Fragment>
      <ProfileHeading heading="Team Chat">
        <UserImagesOverlay
          imgArray={[
            "/images/user2.jpg",
            "/images/user.jpg",
            "/images/user2.jpg",
          ]}
          alt="Team members"
          size={8}
        />
      </ProfileHeading>
      <div className=" w-full h-52 rounded-lg bg-violet-100 relative overflow-hidden">
        <div className="grid grid-cols-1 gap-3 px-3 py-4 justify-center h-40 text-lg font-semibold text-gray-400 overflow-auto">
          {/* <p>Start a chat</p> */}
          <Message
            content="Guys, could you send me the latest build pls?"
            sentBy="Clare"
            senderImage="/images/user2.jpg"
            time="11:39 PM"
          />
          <Message
            content="Guys, could you send me the latest build pls?"
            sentBy="Clare"
            senderImage="/images/user2.jpg"
            time="11:39 PM"
          />
          <Message
            content="Guys, could you send me the latest build pls?"
            sentBy="Clare"
            senderImage="/images/user2.jpg"
            time="11:39 PM"
          />
          <Message
            content="Here's the latest build for you."
            sentBy="me"
            senderImage="/images/user2.jpg"
            time="11:39 PM"
          />
        </div>
        <MessageInput />
      </div>
    </Fragment>
  );
};

export default TeamChatSmall;
