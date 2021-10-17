import React from "react";
import Navbar from "../../components/Navbar";
import { hero } from "../../components/Assets";
import { timeline } from "./timeline.json";
function Timeline() {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-gray-800 bg-white">
        <Navbar />
        <div className="container md:w-2/3 mx-auto py-4 px-4">
          <img
            src={hero}
            className="w-14 rounded-full mb-4 cursor-pointer"
            alt=""
          />

          <div>
            <div className="text-2xl font-semibold dark:text-white">
              My timeline
            </div>
            {timeline.reverse().map((obj) => {
              return (
                <div className=" w-full mt-8 p-4  leading-loose">
                  <div className="text-xl  font-semibold text-pink-600">
                    {obj.date}
                  </div>
                  <div className="text-lg">
                    <span className="text-blue-600 dark:text-yellow-300">{obj.head}</span> -{" "}
                    <span className="text-gray-500">
                      {obj.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
