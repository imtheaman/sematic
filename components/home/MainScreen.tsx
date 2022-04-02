import { NextPage } from "next";
import Image from "next/image";
import CurrentProjectHighlight from "./CurrentProjectHighlight";
import OverviewCard from "./OverviewCard";

const MainScreen: NextPage = () => {
  return (
    <div className="main-screen">
      {/* Header Overview Part */}
      <div className="grid grid-cols-3 mb-6 gap-8 p-2">
        <div className="col-span-2">
          <h2 className="heading mb-5">Daily Read</h2>
          <OverviewCard className="h-56 flex">
            <div className="w-1/2 flex flex-col items-start">
              <h1 className="text-3xl heading flex-grow normal-case">
                Are deadlines a real key success indicator?
              </h1>
              <button className="bg-blueish text-[#fff] px-10 py-2 rounded-lg">
                Read
              </button>
            </div>
            <div className="relative w-1/2">
              <Image
                src="/images/post.jpg"
                layout="fill"
                objectFit="cover"
                alt="article's image"
              />
            </div>
          </OverviewCard>
        </div>
        <div>
          <div className="flex justify-between items-start w-full">
            <h2 className="heading mb-5">insights</h2>
            <select className="text-gray-400 bg-transparent cursor-pointer outline-none">
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <OverviewCard className="h-56">
            <div className="flex items-center justify-center w-full h-full">
              No records tracked...
            </div>
          </OverviewCard>
        </div>
      </div>

      {/* Progress on Current Project part */}
      <CurrentProjectHighlight />
    </div>
  );
};

export default MainScreen;
