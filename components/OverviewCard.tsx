import { NextPage } from "next";

interface Props {
  className: string;
}
const OverviewCard: NextPage<Props> = ({ className, children }) => {
  return (
    <div
      className={`shadow-md rounded-xl cursor-pointer bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default OverviewCard;
