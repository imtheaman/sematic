import { NextPage } from "next";
import Image from "next/image";

interface Props {
  imgArray: string[];
  alt: string;
  size: string;
  width: string;
  height: string;
}

const UserImagesOverlay: NextPage<Props> = ({
  imgArray,
  alt,
  size,
  width,
  height,
}) => {
  return (
    <div className="-space-x-4 flex items-center">
      {imgArray.map((img, index) => {
        return (
          <span
            key={index}
            className={`relative rounded-full ${width} ${height} z-${
              40 - 10 * index
            } border-2 border-[#fff]`}
          >
            <Image
              className="rounded-full"
              src={img}
              layout="fill"
              alt={alt}
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
