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
import { useRouter } from "next/router";

const NavBar: NextPage = () => {
  const router = useRouter();
  console.log(router.route);
  return (
    <div className="min-w-[6rem] h-[100vh] flex items-center flex-col justify-center text-gray-400">
      <div className="flex flex-col space-y-12 ">
        <Link href="/" passHref>
          <FontAwesomeIcon
            icon={faHome}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/user" passHref>
          <FontAwesomeIcon
            icon={faUser}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/user" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/projects" passHref>
          <FontAwesomeIcon
            icon={faBook}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/projects" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/insights" passHref>
          <FontAwesomeIcon
            icon={faChartPie}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/insights" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/setting" passHref>
          <FontAwesomeIcon
            icon={faGear}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/setting" && "text-violetish"
            }`}
          />
        </Link>
      </div>
      <Link href="#" passHref>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="mt-12 cursor-pointer"
          fontSize="20"
        />
      </Link>
    </div>
  );
};

export default NavBar;
