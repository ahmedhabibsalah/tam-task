/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
function SignIn({ setToken }) {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      user,
      pwd,
    });
    setToken(token);
  };
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <section className="bg-[#ffffff] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full flex flex-col items-start justify-start sm:max-w-md mb-8">
            <h3 className="flex self-start mb-4 text-3xl	 font-bold text-[#242731] dark:text-white">
              Get’s started.
            </h3>
            <p className="text-lg	font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="font-medium  text-[#A162F7] hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </div>
          <div className="w-full bg-[#FFFFFF]  sm:max-w-md  ">
            <div className="space-y-4 md:space-y-6">
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="w-full space-y-4 md:space-y-6 bg-[#FFFFFF] shadow-[0_10px_110px_1px_rgba(0,0,0,0.08)] rounded-[10px] border border-[#F4F5F6]  md:mt-0 sm:max-w-md p-[30px]">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-[#FFFFFF] h-[60px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-[#FFFFFF] h-[60px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                    />
                    <svg
                      className="absolute top-[51px] right-[15px] cursor-pointer"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handlePassword}
                    >
                      <path
                        d="M19.9165 8.1C17.8972 3.41 14.0986 0.5 10 0.5C5.90143 0.5 2.10275 3.41 0.0834557 8.1C0.0284116 8.22617 0 8.36234 0 8.5C0 8.63766 0.0284116 8.77383 0.0834557 8.9C2.10275 13.59 5.90143 16.5 10 16.5C14.0986 16.5 17.8972 13.59 19.9165 8.9C19.9716 8.77383 20 8.63766 20 8.5C20 8.36234 19.9716 8.22617 19.9165 8.1ZM10 14.5C6.8311 14.5 3.83215 12.21 2.10275 8.5C3.83215 4.79 6.8311 2.5 10 2.5C13.1689 2.5 16.1679 4.79 17.8972 8.5C16.1679 12.21 13.1689 14.5 10 14.5ZM10 4.5C9.20915 4.5 8.43606 4.7346 7.77849 5.17412C7.12093 5.61365 6.60841 6.23836 6.30577 6.96927C6.00312 7.70017 5.92394 8.50444 6.07823 9.28036C6.23251 10.0563 6.61334 10.769 7.17256 11.3284C7.73177 11.8878 8.44426 12.2688 9.21991 12.4231C9.99556 12.5775 10.7996 12.4983 11.5302 12.1955C12.2609 11.8928 12.8853 11.3801 13.3247 10.7223C13.7641 10.0645 13.9986 9.29113 13.9986 8.5C13.9986 7.43913 13.5773 6.42172 12.8274 5.67157C12.0776 4.92143 11.0605 4.5 10 4.5ZM10 10.5C9.60458 10.5 9.21803 10.3827 8.88925 10.1629C8.56046 9.94318 8.30421 9.63082 8.15288 9.26537C8.00156 8.89991 7.96197 8.49778 8.03911 8.10982C8.11626 7.72186 8.30667 7.36549 8.58628 7.08579C8.86589 6.80608 9.22213 6.6156 9.60996 6.53843C9.99778 6.46126 10.3998 6.50087 10.7651 6.65224C11.1304 6.80362 11.4427 7.05996 11.6624 7.38886C11.882 7.71776 11.9993 8.10444 11.9993 8.5C11.9993 9.03043 11.7887 9.53914 11.4137 9.91421C11.0388 10.2893 10.5302 10.5 10 10.5Z"
                        fill="#777E91"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between sm:max-w-md mx-2 my-8">
                  <div className="flex items-center">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-[#B1B5C3] rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-base">
                      <label
                        htmlFor="remember"
                        className="text-[#B1B5C4] dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-base font-medium text-[#A162F7] hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full sm:max-w-md h-[60px] text-white bg-[#A162F7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-[10px] text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};
