import React, { useEffect, useRef, useCallback, FC, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface SignUpModalProps {
  showModal: boolean;
  setShowModal: Function;
}

export const SignUpModal: FC<SignUpModalProps> = ({
  showModal,
  setShowModal,
}) => {
  const modalRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // const { signUp } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [loading, setLodaing] = useState(false);
  const [fetchStatus, setFetchStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError('');
      setLodaing(true);
      // await signUp(emailRef.current?.value, passwordRef.current?.value);

      navigate('/dashboard');
    } catch {
      setError('Failed to create an account');
    }
    setLodaing(false);
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <div
          className=" text-white bg-slate-500 bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center"
          onClick={closeModal}
          ref={modalRef}
        >
          <animated.div style={animation}>
            <div className="w-[800px] h-[500px] shadow-md bg-[#fff] relative z-20 rounded-xl ">
              <div className="flex flex-col items-center text-black pt-10 text-3xl">
                Sign up
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
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-20 sm:text-sm "
                      placeholder="Email address"
                      ref={emailRef}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-20 sm:text-sm"
                      placeholder="Password"
                      ref={passwordRef}
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
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};
