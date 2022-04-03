import { NextPage } from "next";
import OneWeekContributions from "./OneWeekContributions";

interface Props {
  month: string;
  data: number[][];
}
const OneMonthContributions: NextPage<Props> = ({ month, data }) => {
  return (
    <div>
      <p className="mb-2">{month}</p>
      <div className="flex space-x-2">
        {data.map((week, index) => {
          return <OneWeekContributions key={index} weekContributions={week} />;
        })}
      </div>
    </div>
  );
};

export default OneMonthContributions;
