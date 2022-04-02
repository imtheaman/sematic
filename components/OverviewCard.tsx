import { NextPage } from "next";

interface Props {
  className: string;
}
const OverviewCard: NextPage<Props> = ({ className, children }) => {
  return (
    <div className={`shadow-md rounded-xl py-4 px-6 bg-white ${className}`}>
      {children}
    </div>
  );
};

export default OverviewCard;
