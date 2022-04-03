import { NextPage } from "next";
import { useState } from "react";
import OneMonthContributions from "./OneMonthContributions";

const Contributions: NextPage = () => {
  const data = {
    April: [
      [6, 6, 8, 10, 0, 6, 0],
      [6, 0, 6, 2, 10, 0, 8],
      [4, 2, 4, 0, 0, 0, 10],
      [8, 6, 4, 2, 10, 0, 10],
    ],
    May: [
      [10, 10, 8, 4, 2, 10, 2],
      [0, 4, 2, 10, 0, 2, 10],
      [8, 0, 2, 10, 2, 4, 10],
      [4, 8, 0, 10, 10, 6, 6],
    ],
    June: [
      [4, 10, 0, 0, 2, 8, 10],
      [4, 2, 8, 10, 6, 2, 2],
      [0, 4, 0, 4, 8, 8, 4],
      [0, 0, 0, 6, 2, 0, 6],
    ],
    July: [
      [10, 10, 0, 2, 8, 4, 10],
      [2, 8, 4, 8, 8, 6, 4],
      [2, 2, 0, 6, 8, 10, 8],
      [10, 10, 6, 4, 10, 2, 2],
    ],
    Aug: [
      [2, 4, 0, 4, 0, 8, 6],
      [10, 0, 0, 10, 10, 8, 2],
      [2, 10, 4, 10, 10, 10, 10],
      [2, 2, 0, 6, 2, 8, 6],
    ],
    Sep: [
      [6, 8, 8, 4, 10, 6, 4],
      [2, 4, 6, 8, 10, 10, 2],
      [10, 0, 2, 2, 6, 8, 6],
      [2, 4, 2, 4, 4, 6, 8],
    ],
    Oct: [
      [2, 10, 2, 2, 6, 4, 10],
      [10, 6, 8, 4, 10, 6, 10],
      [0, 10, 4, 6, 6, 2, 10],
      [8, 6, 2, 8, 0, 8, 10],
    ],
    Nov: [
      [2, 0, 0, 2, 6, 0, 2],
      [6, 2, 2, 0, 4, 4, 6],
      [2, 6, 10, 10, 4, 2, 0],
      [0, 9, 0, 6, 14, 12, 12],
    ],
    Dec: [
      [5, 3, 9, 0, 7, 2, 4],
      [3, 3, 0, 2, 9, 7, 9],
      [4, 1, 3, 6, 8, 3, 5],
      [3, 2, 2, 6, 3, 5, 2],
    ],
    Jan: [
      [7, 9, 0, 7, 9, 1, 8],
      [1, 6, 7, 1, 8, 0, 4],
      [2, 6, 6, 1, 4, 7, 1],
      [3, 9, 0, 7, 1, 9, 0],
    ],
    Feb: [
      [3, 0, 2, 6, 2, 7, 7],
      [0, 5, 7, 5, 3, 2, 9],
      [5, 6, 2, 7, 5, 4, 1],
      [0, 8, 1, 0, 3, 7, 9],
    ],
    Mar: [
      [12, 7, 13, 9, 12, 7, 6],
      [8, 0, 14, 11, 5, 9, 5],
      [6, 2, 9, 4, 6, 12, 14],
      [12, 6, 8, 10, 2, 0, 0],
    ],
  };
  const currentYear = new Date().getFullYear();
  const [contributionYear, setContributionYear] = useState(currentYear);

  return (
    <div className="flex space-x-4 bg-white h-48 w-full p-4 text-gray-700 justify-items-center shadow-sm overflow-scroll rounded-lg">
      <ul className="text-xs h-full py-7">
        <li>Sun</li>
        <li>
          <br />
        </li>
        <li>Tue</li>
        <li>
          <br />
        </li>
        <li>Thu</li>
        <li>
          <br />
        </li>
        <li>Sat</li>
      </ul>
      <div className="flex flex-row space-x-2 flex-grow">
        {Object.keys(data).map((month) => {
          return (
            <OneMonthContributions
              month={month}
              data={data[month]}
              key={month}
            />
          );
        })}
      </div>
      <div className="flex flex-col space-y-2 h-full justify-center px-4">
        <button
          onClick={() => setContributionYear(currentYear)}
          className={contributionYear === currentYear ? "btn-selected" : "btn"}
        >
          {currentYear}
        </button>
        <button
          onClick={() => setContributionYear(currentYear - 1)}
          className={
            contributionYear === currentYear - 1 ? "btn-selected" : "btn"
          }
        >
          {currentYear - 1}
        </button>
        <button
          onClick={() => setContributionYear(currentYear - 2)}
          className={
            contributionYear === currentYear - 2 ? "btn-selected" : "btn"
          }
        >
          {currentYear - 2}
        </button>
      </div>
    </div>
  );
};

export default Contributions;
