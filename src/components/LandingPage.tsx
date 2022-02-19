import React from "react";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export const LandingPage = () => {
  console.log("You made it to the landing page");
  return (
    <div>
      <div className="w-11/12 m-auto">
        <Navbar />
        <Hero />
      </div>

      <Footer />
    </div>
  );
};
