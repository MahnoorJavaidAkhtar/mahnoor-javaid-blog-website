import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const BannerBottom = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center items-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-gray-100 py-6 px-6 lg:py-12 lg:px-8 mt-12 lg:mt-16 z-50 border border-gray-700 shadow-lg rounded-lg">
      <div className="w-full lg:w-[60%] flex flex-col gap-4">
        <p className="text-sm lg:text-base uppercase font-bodyFont font-semibold text-gray-300">
          My Blog
        </p>
        {/* New Heading Added */}
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-white">
          Explore the Latest Insights
        </h2>
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-white">
          These 7 things will change the way you approach learning!
        </h3>
        <p className="text-xs md:text-sm lg:text-base text-gray-400">Camila Hoffman / 4 weeks ago</p>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-6 lg:gap-8">
        <div className="w-full flex flex-col items-center group">
          <MdOutlineMonitor className="text-3xl lg:text-4xl text-gray-400 group-hover:text-yellow-300 transition duration-300" />
          <p className="text-xs md:text-sm lg:text-base font-titleFont text-gray-400 group-hover:text-gray-100">
            watch on youtube
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <IoMdHeartEmpty className="text-3xl lg:text-4xl text-gray-400 group-hover:text-pink-400 transition duration-300" />
          <p className="text-xs md:text-sm lg:text-base font-titleFont text-gray-400 group-hover:text-gray-100">
            like our contents
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <GoComment className="text-3xl lg:text-4xl text-gray-400 group-hover:text-cyan-300 transition duration-300" />
          <p className="text-xs md:text-sm lg:text-base font-titleFont text-gray-400 group-hover:text-gray-100">
            place comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;