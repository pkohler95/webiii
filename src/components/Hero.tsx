import React from "react";
import airplane from "../images/airplane.svg";

export const Hero = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-20 w-full"></div>
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="lg:w-1/2 flex flex-col">
          <div className="lg:w-4/5 m-auto">
            <div className="text-5xl lg:text-6xl text-center lg:text-left  font-bold pb-4 max-w-sm min-w-[302px]">
              Unleasing the power of tokenomics
            </div>

            <div className="text-center lg:text-left pb-4 max-w-sm ">
              No ads, no spam, just tokenomics. The Webiii digital economy
              enables an ad free, spam free, experience using microtransactions
              to reward creators and deter bad actors
            </div>
            <div className="flex justify-center lg:justify-start">
              <div>
                <button className=" py-2 w-32 rounded-lg text-white bg-black text-sm m-auto">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2  justify-center hidden lg:flex max-w-[600px]">
          <img src={airplane} alt="" />
        </div>
      </div>
      <div className="h-48 w-full"></div>
    </div>
  );
};
