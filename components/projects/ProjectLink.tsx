import { NextPage } from "next";
import Link from "next/link";

interface Props {
  completed: number;
  total: number;
  name: string;
}

{
  /*  */
}
const ProjectLink: NextPage<Props> = ({ completed, total, name }) => {
  const width = Math.round((10 * completed) / total);
  return (
    <li className="p-4 border-b flex items-center justify-between">
      <Link href="#">{name}</Link>
      <div className="flex items-center">
        <div
          className={`w-[10rem] h-2 bg-gray-300 rounded relative overflow-hidden`}
        >
          <span
            style={{ width: width + "rem" }}
            className={`absolute top-0 h-full left-0 bg-violetish rounded`}
          ></span>
        </div>
        <div className="ml-8 font-semibold text-gray-700">
          {completed}/{total}
        </div>
      </div>
    </li>
  );
};

export default ProjectLink;
