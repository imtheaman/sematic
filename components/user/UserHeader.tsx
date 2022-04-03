import { NextPage } from "next";
import Image from "next/image";
import { Fragment } from "react";
import OneMonthContributions from "./OneMonthContributions";
import OneWeekContributions from "./OneWeekContributions";

// bg-[#fff] shadow-md p-2 rounded-xl
const UserHeader: NextPage = () => {
  const data = [
    
  ]
  return (
    <Fragment>
      <div className="w-full relative overflow-hidden h-48 bg-[#fff] rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          alt="Captured by Drew Beamer"
        />
      </div>
      <div className="flex mt-8 justify-between px-3">
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
            <h1 className="heading text-3xl">Sarah Williams</h1>
            <h3 className="text-lg text-gray-600">Hiring manager at Apple</h3>
            <span className="text-gray-500 flex-grow">2017 - Current</span>
            <p>Loves to talk about #productivity</p>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex space-x-2 items-center">
            <h3 className="text-lg text-[#fff] bg-blueish font-thin py-1 px-4 -skew-x-12">
              <span className="inline-block skew-x-12">
                Most recent project
              </span>
            </h3>
            <p className="text-gray-900 text-lg ">
              Sematic: iOS app development
            </p>
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">teammates</h3>
              <span className="text-xl font-bold text-blueish">32</span>
            </div>
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">
                connections
              </h3>
              <span className="text-xl font-bold text-blueish">128</span>
            </div>
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">projects</h3>
              <span className="text-xl font-bold text-blueish">43</span>
            </div>
            <div className="flex flex-col-reverse items-center ">
              <h3 className="text-lg font-semibold text-gray-600">
                contributions
              </h3>
              <span className="text-xl font-bold text-blueish">4988</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse flex-wrap bg-white h-48 w-full max-w-4xl p-3 justify-items-center shadow-sm overflow-scroll rounded-lg mt-8">
        <ul className="text-xs space-y-2 text-gray-700">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        {/* <OneMonthContributions /> */}
        <OneWeekContributions weekContributions={[6, 6, 8, 10, 0, 6, 0]} />
        <OneWeekContributions weekContributions={[6, 0, 6, 2, 10, 0, 8]} />
        <OneWeekContributions weekContributions={[4, 2, 4, 0, 0, 0, 10]} />
        <OneWeekContributions weekContributions={[8, 6, 4, 2, 10, 0, 10]} />
        <OneWeekContributions weekContributions={[10, 10, 8, 4, 2, 10, 2]} />
        <OneWeekContributions weekContributions={[0, 4, 2, 10, 0, 2, 10]} />
        <OneWeekContributions weekContributions={[8, 0, 2, 10, 2, 4, 10]} />
        <OneWeekContributions weekContributions={[4, 8, 0, 10, 10, 6, 6]} />
        <OneWeekContributions weekContributions={[4, 10, 0, 0, 2, 8, 10]} />
        <OneWeekContributions weekContributions={[4, 2, 8, 10, 6, 2, 2]} />
        <OneWeekContributions weekContributions={[0, 4, 0, 4, 8, 8, 4]} />
        <OneWeekContributions weekContributions={[0, 0, 0, 6, 2, 0, 6]} />
        <OneWeekContributions weekContributions={[10, 10, 0, 2, 8, 4, 10]} />
        <OneWeekContributions weekContributions={[2, 8, 4, 8, 8, 6, 4]} />
        <OneWeekContributions weekContributions={[2, 2, 0, 6, 8, 10, 8]} />
        <OneWeekContributions weekContributions={[10, 10, 6, 4, 10, 2, 2]} />
        <OneWeekContributions weekContributions={[2, 4, 0, 4, 0, 8, 6]} />
        <OneWeekContributions weekContributions={[10, 0, 0, 10, 10, 8, 2]} />
        <OneWeekContributions weekContributions={[2, 10, 4, 10, 10, 10, 10]} />
        <OneWeekContributions weekContributions={[2, 2, 0, 6, 2, 8, 6]} />
        <OneWeekContributions weekContributions={[6, 8, 8, 4, 10, 6, 4]} />
        <OneWeekContributions weekContributions={[2, 4, 6, 8, 10, 10, 2]} />
        <OneWeekContributions weekContributions={[10, 0, 2, 2, 6, 8, 6]} />
        <OneWeekContributions weekContributions={[2, 4, 2, 4, 4, 6, 8]} />
        <OneWeekContributions weekContributions={[2, 10, 2, 2, 6, 4, 10]} />
        <OneWeekContributions weekContributions={[10, 6, 8, 4, 10, 6, 10]} />
        <OneWeekContributions weekContributions={[0, 10, 4, 6, 6, 2, 10]} />
        <OneWeekContributions weekContributions={[8, 6, 2, 8, 0, 8, 10]} />
        <OneWeekContributions weekContributions={[2, 0, 0, 2, 6, 0, 2]} />
        <OneWeekContributions weekContributions={[6, 2, 2, 0, 4, 4, 6]} />
        <OneWeekContributions weekContributions={[2, 6, 10, 10, 4, 2, 0]} />
      </div>
    </Fragment>
  );
};

export default UserHeader;
