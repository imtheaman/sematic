import { NextPage } from "next";
import Image from "next/image";

interface Props {
  sentByMe?: boolean;
  sentBy: string;
  senderImage: string;
  content: any;
  time: any;
}

const Message: NextPage<Props> = ({ senderImage, sentBy, content, time }) => {
  return (
    <div
      className={`flex w-full items-start justify-between ${
        sentBy === "me" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex items-start">
        {sentBy !== "me" ? (
          <Image
            src={senderImage}
            width="25px"
            height="25px"
            objectFit="cover"
            className="rounded-full"
            objectPosition="top"
            alt="user"
          />
        ) : null}
        <div
          className={`py-2 px-3 ml-2 max-w-[180px] ${
            sentBy === "me" ? "bg-green-100" : "bg-white"
          } rounded text-sm text-gray-700 font-normal`}
        >
          {content}
        </div>
      </div>
      <p className="text-gray-400 text-xs">{time}</p>
    </div>
  );
};

export default Message;
