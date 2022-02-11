import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between pt-5">
      <button className="py-2 text-3xl font-bold">Webiii</button>
      <div className="flex text-sm flex justify-center items-center">
        <button className="mx-2 py-2 w-28 rounded-lg hover:bg-white">
          Login
        </button>
        <button className="mx-2 py-2 w-28 rounded-lg text-white bg-black ">
          Sign up
        </button>
      </div>
    </div>
  );
};
