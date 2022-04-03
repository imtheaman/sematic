import { NextPage } from "next";
import OneWeekContributions from "./OneWeekContributions";

interface Props {
  month: string;
  data: number[][];
}
const OneMonthContributions: NextPage<Props> = ({ month, data }) => {
  return (
    <>
      <p>{month}</p>
      {data.map((week, index) => {
        return <OneWeekContributions key={index} weekContributions={week} />;
      })}
    </>
  );
};

export default OneMonthContributions;
