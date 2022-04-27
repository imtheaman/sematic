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
  return (
    <div className="min-w-[5rem] h-[100vh] flex items-center flex-col justify-center text-gray-400">
      <div className="flex flex-col space-y-12 ">
        <Link href="/" passHref>
          <FontAwesomeIcon
            title="Home"
            icon={faHome}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/profile" passHref>
          <FontAwesomeIcon
            title="Profile"
            icon={faUser}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/profile" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/projects" passHref>
          <FontAwesomeIcon
            title="Projects"
            icon={faBook}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/projects" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/insights" passHref>
          <FontAwesomeIcon
            title="Insights"
            icon={faChartPie}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/insights" && "text-violetish"
            }`}
          />
        </Link>
        <Link href="/settings" passHref>
          <FontAwesomeIcon
            title="Settings"
            icon={faGear}
            fontSize="20"
            className={`cursor-pointer ${
              router.route === "/settings" && "text-violetish"
            }`}
          />
        </Link>
      </div>
      <Link href="#" passHref>
        <FontAwesomeIcon
          title="Sign out"
          icon={faRightFromBracket}
          className="mt-12 cursor-pointer"
          fontSize="20"
        />
      </Link>
    </div>
  );
};

export default NavBar;
