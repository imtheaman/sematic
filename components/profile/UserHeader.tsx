import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const UserHeader: NextPage<{year: number}> = ({year}) => {
  return (
    <Fragment>
      <div className="w-full relative overflow-hidden shadow-sm h-48 bg-[#fff] rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          alt="Captured by Drew Beamer"
        />
      </div>
      {/* Profile */}
      <div
        style={{ marginBottom: "4rem" }}
        className="flex justify-between px-4 pb-3 border-b"
      >
        <div className="flex h-32">
          <div className="relative w-32 h-full shadow-md overflow-hidden rounded-lg">
            <Image
              src="/images/user2.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt="user-image"
            />
          </div>
          <div className="my-1 ml-6 flex flex-col">
            <h1 className="font-semibold text-violet-900 text-3xl">
              Sarah Williams
            </h1>
            <h3 className="text-lg text-gray-600">Hiring manager at Apple</h3>
            <span className="text-gray-600 flex-grow font-thin">
              2017 - Current
            </span>
            <p>Loves to talk about #productivity</p>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex space-x-2 items-center">
            <h3 className="text-lg text-[#fff] bg-violet-800 font-thin py-1 px-4 -skew-x-12">
              <span className="inline-block skew-x-12">
                Most recent project
              </span>
            </h3>
            <Link href="#" passHref>
              <p className="text-gray-800 text-lg cursor-pointer">
                Sematic: iOS app development
              </p>
            </Link>
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">teammates</h3>
              <span className="text-xl font-bold text-violet-900">32</span>
            </div>
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">
                connections
              </h3>
              <span className="text-xl font-bold text-violet-900">1.28K</span>
            </div>
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">projects</h3>
              <span className="text-xl font-bold text-violet-900">43</span>
            </div>
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">
                contributions({year})
              </h3>
              <span className="text-xl font-bold text-violet-900">4.98K</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserHeader;
