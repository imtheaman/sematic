import { NextPage } from "next";
import Link from "next/link";

const CustomLink: NextPage = ({ children }) => {
  return (
    <Link href="#" passHref>
      <span className="link-hover link">{children}</span>
    </Link>
  );
};

export default CustomLink;
