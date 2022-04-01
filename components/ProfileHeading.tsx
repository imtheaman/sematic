import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";

type Props = {
  heading: string;
};

const ProfileHeading: NextPage<Props> = ({ heading, children }) => {
  return (
    <div className="flex justify-between items-center text-gray-500">
      <h3 className="profile-heading flex-grow">{heading}</h3>
      {children}
      <button className="mx-2">
        <FontAwesomeIcon icon={faEllipsisH} fontSize={20} />
      </button>
    </div>
  );
};

export default ProfileHeading;
