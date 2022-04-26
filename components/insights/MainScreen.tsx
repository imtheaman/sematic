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
    </Fragment>
  );
};

export default MainScreen;
