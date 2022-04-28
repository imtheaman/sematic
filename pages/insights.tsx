import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../components/insights/InsightBar"), {
  ssr: false,
});
const insights = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 h-60">
      <MapView />
    </div>
  );
};

export default insights;
