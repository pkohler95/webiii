import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const modalRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { resetPassword } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLodaing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLodaing(true);
      await resetPassword(emailRef.current?.value);

      setError("Reset email sent");
    } catch {
      setError("Failed to reset password");
    }
    setLodaing(false);
  };

  return (
    <div>
      <div className="flex flex-col justify-between pt-5 w-11/12 m-auto">
        <div className="flex justify-start">
          <button
            onClick={() => navigate("/")}
            className="py-2 text-3xl font-bold"
          >
            Webiii
          </button>
        </div>

        <div
          className=" text-white flex justify-center items-center mt-32"
          ref={modalRef}
        >
          <div className="relative rounded-xl ">
            <div className="flex flex-col items-center text-black pt-10 text-3xl">
              Reset password
            </div>
            <form
              className=" flex flex-col items-center"
              action="#"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" value="true" />
              <div className=" mt-10 mb-6 w-96">
                <div className="  mb-6">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                    placeholder="Email address"
                    ref={emailRef}
                  />
                </div>
              </div>

              <div className="w-96">
                <p className="text-red-500 text-center">{error}</p>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Send reset email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
