import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import ThemeBtn from "./ThemeBtn";

const UiSettings: NextPage = () => {
  return (
    <div className="flex flex-col ml-2 space-y-4">
      <h2 className="font-semibold text-xl">Ui Settings</h2>
      <>
        <h3 className="mb-4">Themes</h3>
        <div className="flex space-x-3">
          <ThemeBtn color="bg-violetish" selected={true} />
          <ThemeBtn color="bg-teal-500" />
          <ThemeBtn color="bg-pink-500" />
          <ThemeBtn color="bg-blue-800" />
          <ThemeBtn color="bg-gray-500" />
          <ThemeBtn color="bg-yellow-500" />
          <ThemeBtn color="bg-orange-500" />
        </div>
      </>

      <>
        <h3 className="mb-4">Screen</h3>
        <div className="flex space-x-4">
          <div className="relative opacity-60 w-52 h-32 bg-white shadow-sm rounded-lg p-2">
            <div className="w-full bg-gray-300 h-full rounded-lg flex justify-center items-center text-[0.7rem]">
              Smooth Edges
            </div>
            <FontAwesomeIcon
              fontSize={35}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              icon={faCheck}
            />
          </div>
          <div className="w-52 h-32 bg-white shadow-sm rounded-lg p-2">
            <div className="w-full bg-gray-300 h-full flex justify-center items-center text-[0.7rem]">
              Sharp Edges
            </div>
          </div>
          <div className="w-52 h-32 bg-white shadow-sm flex justify-center rounded-lg items-center">
            <div className="w-full bg-gray-300 h-full rounded-lg flex justify-center items-center text-[0.7rem]">
              No Padding
            </div>
          </div>
        </div>
      </>

      <>
        <h3>Navigation</h3>
        <div className="flex space-x-4">
          <div className="relative opacity-60 w-52 h-32 p-2 bg-white shadow-sm rounded-lg flex justify-start">
            <div className="w-8 bg-gray-300 h-full rounded-lg"></div>
            <FontAwesomeIcon
              fontSize={35}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              icon={faCheck}
            />
          </div>
          <div className="w-52 h-32 p-2 bg-white shadow-sm rounded-lg flex items-start">
            <div className="h-8 w-full bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-52 h-32 p-2 bg-white shadow-sm rounded-lg flex justify-end">
            <div className="w-8 bg-gray-300 h-full rounded-lg"></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default UiSettings;
