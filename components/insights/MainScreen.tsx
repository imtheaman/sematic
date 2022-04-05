import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const MapView = dynamic(() => import("../insights/InsightBar"), {
  ssr: false,
});

const MainScreen: NextPage = () => {
  return (
    <Fragment>
      <div className="w-full grid grid-cols-2 gap-4 h-60">
        <MapView />
      </div>
      <div className="bg-red-500 w-full h-24 absolute top-70 left-0 flex items-center text-4xl text-[#fff] justify-center">
        ⚠ This page will take more time.<br />thinking about the styles of charts. ⚠
      </div>
    </Fragment>
  );
};

export default MainScreen;
