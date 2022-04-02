import {
  faBook,
  faChartPie,
  faGear,
  faHome,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => {

  return (
    <div className="min-w-[6rem] h-[100vh] flex items-center flex-col justify-center">
      <div className="flex flex-col space-y-12 ">
        <Link href="/" passHref>
          <FontAwesomeIcon
            icon={faHome}
            fontSize="20"
            className="text-violetish cursor-pointer"
          />
        </Link>
        <Link href="/user" passHref>
          <FontAwesomeIcon
            icon={faUser}
            fontSize="20"
            className=" text-gray-400 cursor-pointer"
          />
        </Link>
        <Link href="#" passHref>
          <FontAwesomeIcon
            icon={faBook}
            fontSize="20"
            className=" text-gray-400 cursor-pointer"
          />
        </Link>
        <Link href="#" passHref>
          <FontAwesomeIcon
            icon={faChartPie}
            fontSize="20"
            className=" text-gray-400 cursor-pointer"
          />
        </Link>
        <Link href="#" passHref>
          <FontAwesomeIcon
            icon={faGear}
            fontSize="20"
            className=" text-gray-400 cursor-pointer"
          />
        </Link>
      </div>
      <Link href="#" passHref>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="mt-12 text-gray-400 cursor-pointer"
          fontSize="20"
        />
      </Link>
    </div>
  );
};

export default NavBar;
