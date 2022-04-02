import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import ModalOptions from "./ModalOptions";

type Props = {
  heading: string;
  options?: JSX.Element;
};

const ProfileHeading: NextPage<Props> = ({ heading, children, options }) => {
  return (
    <div className="flex justify-between items-center text-gray-500">
      <h3 className="profile-heading flex-grow">{heading}</h3>
      {children}
      <ModalOptions className="mx-2" options={options}>
        <FontAwesomeIcon icon={faEllipsisH} fontSize={20} />
      </ModalOptions>
    </div>
  );
};

export default ProfileHeading;
