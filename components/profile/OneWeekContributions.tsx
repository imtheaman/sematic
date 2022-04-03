import { NextPage } from "next";

interface Props {
  weekContributions: number[];
}
const OneWeekContributions: NextPage<Props> = ({ weekContributions }) => {
  return (
    <ul className="flex flex-col space-y-1">
      {weekContributions.map((cont, index) => {
        return (
          <li
            key={index}
            title={cont + " contributions"}
            className={`w-3 h-3 rounded-sm ${
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
          ></li>
        );
      })}
    </ul>
  );
};

export default OneWeekContributions;
