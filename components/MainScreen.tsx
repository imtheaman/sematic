import { NextPage } from "next";
import CurrentProjectHighlight from "./CurrentProjectHighlight";
import OverviewCard from "./OverviewCard";

const MainScreen: NextPage = () => {
  return (
    <div className="bg-gray-100 rounded-l-3xl overflow-auto flex-grow w-full h-[100vh] px-12 py-8">
      {/* Header Overview Part */}
      <div className="grid grid-cols-3 mb-6 gap-8 p-2">
        <div className="col-span-2">
          <h2 className="heading mb-5">Daily Read</h2>
          <OverviewCard className="h-56"></OverviewCard>
        </div>
        <div className="">
          <div className="flex justify-between w-full">
            <h2 className="heading mb-5">Progress insights</h2>
            <p className="text-gray-400">Week &darr;</p>
          </div>
          <OverviewCard className="h-56"></OverviewCard>
        </div>
      </div>

      {/* Progress on Current Project part */}
      <CurrentProjectHighlight />
    </div>
  );
};

export default MainScreen;
