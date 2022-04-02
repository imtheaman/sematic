import { NextPage } from "next";
import Image from "next/image";

interface Props {
  imgArray: string[];
  alt: string;
  size: string;
}

const UserImagesOverlay: NextPage<Props> = ({ imgArray, alt, size }) => {
  return (
    <div className="-space-x-4 flex items-center">
      {imgArray.map((img, index) => {
        return (
          <div
            key={index}
            className={`relative rounded-full w-[${size}] h-[${size}] z-${
              40 - 10 * index
            } border-2 border-[#fff]`}
          >
            <Image
              className="rounded-full"
              src={img}
              width={size}
              height={size}
              alt={alt}
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserImagesOverlay;
