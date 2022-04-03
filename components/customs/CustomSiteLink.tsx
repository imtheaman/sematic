import { NextPage } from "next";
import Link from "next/link";

const CustomSiteLink: NextPage = ({ children }) => {
  return (
    <Link href="#" passHref>
      <span className="link-hover link">{children}</span>
    </Link>
  );
};

export default CustomSiteLink;
