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
import { useState } from "react";

const NavBar: NextPage = () => {
  const [currentIcon, setCurrentIcon] = useState("faHome");

  return (
    <div className="w-28 h-[100vh] flex items-center flex-col justify-center">
      <div className="flex flex-col space-y-12 ">
        <button>
          <FontAwesomeIcon icon={faHome} fontSize="20" color="#784af5" />
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} fontSize="20" color="#d6d5da" />
        </button>
        <button>
          <FontAwesomeIcon icon={faBook} fontSize="20" color="#d6d5da" />
        </button>
        <button>
          <FontAwesomeIcon icon={faChartPie} fontSize="20" color="#d6d5da" />
        </button>
        <button>
          <FontAwesomeIcon icon={faGear} fontSize="20" color="#d6d5da" />
        </button>
      </div>
      <button>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="mt-12"
          fontSize="20"
          color="#d6d5da"
        />
      </button>
    </div>
  );
};

export default NavBar;
