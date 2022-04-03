import { NextPage } from "next";

interface Props {
  weekContributions: number[];
}
const OneWeekContributions: NextPage<Props> = ({ weekContributions }) => {
  return (
    <div className="flex flex-col space-y-2">
      {weekContributions.map((cont, index) => {
        return (
          <div
            key={index}
            title={cont + " contributions"}
            className={`w-4 h-4 rounded ${
              cont >= 10
                ? "bg-green-700"
                : cont >= 7
                ? "bg-green-600"
                : cont >= 4
                ? "bg-green-400"
                : cont > 0
                ? "bg-green-200"
                : "bg-gray-300"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default OneWeekContributions;
