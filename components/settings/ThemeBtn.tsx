import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next"

const ThemeBtn: NextPage<{selected?: boolean, color: string}> = ({selected = false, color}) => {
    return (
      <button className={`w-8 h-8 rounded-lg ${color}`}>
        <FontAwesomeIcon icon={faCheck} color="#fff" className={selected ? "": "hidden"} />
      </button>
    );
}

export default ThemeBtn