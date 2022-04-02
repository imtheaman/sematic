import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";

const MessageInput: NextPage = () => {
  return (
    <div className="absolute bottom-0 w-full bg-white rounded-lg h-12 shadow-sm border-2 border-violet-100">
      <button className="py-2 px-3 absolute bottom-[0.1rem] left-2 rounded-lg hover:animation-fade">
        <FontAwesomeIcon icon={faPaperclip} color="#784af5" fontSize={18} />
      </button>
      <input
        type="text"
        placeholder="Type a message here"
        className="w-full h-full focus:ring-1 rounded-lg outline-none ring-violetish transition duration-75 ease-out pl-12"
      />
      <button className="py-2 px-3 bg-violetish text-[#fff] absolute bottom-[0.15rem] right-[0.15rem] rounded-lg hover:animation-fade">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default MessageInput;
