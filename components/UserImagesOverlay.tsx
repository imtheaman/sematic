import { NextPage } from "next";
import Image from "next/image";

interface Props {
  imgArray: string[];
  alt?: string;
  size: number;
}

const UserImagesOverlay: NextPage<Props> = ({ imgArray, alt, size }) => {
  return (
    <div className="-space-x-4 flex items-center">
      {imgArray.map((img, index) => {
        return (
          <span
            key={index}
            className={`relative rounded-full w-${size} h-${size} z-${
              40 - 10 * index
            } border-2 border-[#fff]`}
          >
            <Image
              className="rounded-full"
              src={img}
              alt={alt}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </span>
        );
      })}
    </div>
  );
};

export default UserImagesOverlay;
