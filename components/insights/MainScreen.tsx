import { NextPage } from "next";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../insights/InsightBar"), {
  ssr: false,
});

const MainScreen: NextPage = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 h-60">
      <MapView />
    </div>
  );
};

export default MainScreen;
