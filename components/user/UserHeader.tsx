import { NextPage } from "next";
import Image from "next/image";

const UserHeader: NextPage = () => {
  return (
    <div>
      <div className="relative w-32 h-32 shadow-md rounded-xl">
        <Image
          src="/images/user2.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          objectPosition="top"
          alt="user-image"
        />
      </div>
    </div>
  );
};

export default UserHeader;
