import React from "react";

type Props = {};

function DownloadShows({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row h-[60%] p-8 text-white text-center lg:pl-4 lg:text-start border-b-8 border-gray-800 xl:px-28">
      <div className="flex flex-col lg:justify-center items-center xl:ml-[10%] xl:max-w-[40%]">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl lg:self-start font-bold my-3">
        Download your shows to watch offline.
        </h1>
        <h2 className="text-md sm:text-xl lg:text-xl font-semibold my-2 xl:mr-8">
        Save your favorites easily and always have something to watch.
        </h2>
      </div>
      <div className="relative">
        <img
          className="my-3 md:max-w-[40rem] lg:w-[25rem] md:ml-[12%] lg:ml-0 object-contain"
          src="./assets/ab.gif"
          alt="img1"
        />
        </div>
        </div>)}

export default DownloadShows;
