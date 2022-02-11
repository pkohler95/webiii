import React from "react";
import airplane from "../images/airplaneNoClouds.svg";

export const Footer = () => {
  return (
    <div className="bg-white pt-8 pb-2">
      <div className="w-11/12 m-auto">
        <div className="flex justify-center">
          <div className="sm:w-1/3 ">
            <div className="w-[66px] m-auto sm:m-0">
              <img src={airplane} alt="" />
            </div>
            <div className="w-60 text-center sm:text-left">
              This footer is currently under construction. Sorry none of the
              links work 😢
            </div>
          </div>
          <div className="hidden sm:flex justify-between w-2/3">
            <div className="w-1/8"></div>
            <div className="w-1/4">
              <div className="text-[#FFC41F] mb-2">Services</div>
              <div className="mb-2">Email Marketing</div>
              <div className="mb-2">Campaigns</div>
              <div className="mb-2">Branding</div>
              <div className="mb-2">Offline</div>
            </div>
            <div className="w-1/4">
              <div className="text-[#FFC41F] mb-2">About</div>
              <div className="mb-2">Our Story</div>
              <div className="mb-2">Benefits</div>
              <div className="mb-2">Team</div>
              <div className="mb-2">Careers</div>
            </div>
            <div className="w-1/4">
              <div className="text-[#FFC41F] mb-2">Follow Us</div>
              <div className="mb-2">Facebook</div>
              <div className="mb-2">Instagram</div>
              <div className="mb-2">Twitter</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="text-gray-300 text-center sm:text-left m-auto sm:m-0">
            Copyright &copy; 2022. Webiii. All rights reserved.
          </div>
          <div className="flex mr-20 hidden sm:flex">
            <div>Terms & Conditions</div>
            <div className="pl-10">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
