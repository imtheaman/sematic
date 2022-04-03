import { faEllipsisV, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  totalPoints: number;
  name: string;
  donePoints: number;
}

const ProfileCard: NextPage<Props> = ({
  title,
  image,
  name,
  totalPoints,
  donePoints,
}) => {
  const conditionalClass =
    donePoints / totalPoints >= 1
      ? "bg-teal-100 text-skyish"
      : donePoints / totalPoints >= 0.9
      ? "bg-yellow-100 text-yellowish"
      : "bg-orange-100 text-orangish";

  return (
    <div
      className={`profile-card ${conditionalClass} card-animation border flex flex-col justify-between px-4 py-3`}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSquare} fontSize={17} />
        <h4 className="font-semibold ml-2 flex-grow text-blueish">{title}</h4>
        <FontAwesomeIcon
          icon={faEllipsisV}
          className="text-blueish"
          fontSize={16}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={image}
            className="rounded-full"
            alt="image of the user"
            width={34}
            height={34}
            objectFit="cover"
            objectPosition="top"
          />
          <p className="ml-3 text-gray-600 text-sm">{name}</p>
        </div>
        <span className="font-semibold text-sm">
          {donePoints}/{totalPoints} done
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
