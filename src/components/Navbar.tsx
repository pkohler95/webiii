import React, { useState, useRef } from "react";
import { SignUpModal } from "./notUsed/SignUpModal";
import { SignInModal } from "./notUsed/SignInModal";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const navigate = useNavigate();

  const openSignUpModal = () => {
    navigate("/signup");
  };

  const openSignInModal = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-between pt-5">
      <button className="py-2 text-3xl font-bold">Webiii</button>
      <div className="flex text-sm flex justify-center items-center">
        <button
          onClick={openSignInModal}
          className="mx-2 py-2 w-28 rounded-lg hover:bg-white"
        >
          Login
        </button>
        <button
          onClick={openSignUpModal}
          className="mx-2 py-2 w-28 rounded-lg text-white bg-black "
        >
          Sign up
        </button>
        <SignUpModal
          showModal={showSignUpModal}
          setShowModal={setShowSignUpModal}
        />
        <SignInModal
          showModal={showSignInModal}
          setShowModal={setShowSignInModal}
        />
      </div>
    </div>
  );
};
