import React, { useState } from "react";

import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { Cars, DashboardIcn, LogOut, Settings } from "./Icons/Icons";
import SearchBar from "./shared/SearchBar";
import Account from "./shared/Account";
import Dashboard from "../pages/Dashboard";

const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcn />,
  },
  {
    id: 2,
    title: "Cars",
    icon: <Cars />,
  },
];
function Layout() {
  const [isActive, setIsActive] = useState(1);

  return (
    <>
      <IconContext.Provider value={{ color: "#5F6165" }}>
        {/* All the icons now are white */}
        <div className="bg-[#ffffff] h-0 sm:h-[78px] flex justify-start items-center">
          <div className="hidden sm:flex justify-between items-center w-full ml-[300px]">
            <SearchBar />
            <div className="hidden sm:flex mr-6">
              <Account />
            </div>
          </div>
        </div>
        <div className="flex ">
          <nav className=" bg-[#ffffff] w-full sm:w-[250px] flex-[0.2] sticky">
            <ul className="w-full p-0">
              <li className="flex justify-start items-center py-2 ml-4  mr-1 h-[60px] list-none">
                <img src="./logo.svg" alt="logo" />
              </li>
              <li className="flex sm:hidden justify-center items-center py-2 ml-4 mr-1 h-[60px] list-none">
                <SearchBar />
              </li>
              <li className="flex sm:hidden justify-center items-center py-2 ml-4  mr-1 h-[60px] list-none">
                <Account />
              </li>
              {SidebarData.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`flex justify-start items-center py-2 ml-4  mr-1 h-[60px] list-none	${
                      isActive === item.id
                        ? "bg-[#F3F5F8] rounded-[6px]"
                        : "bg-[#FFFFFF]"
                    }`}
                  >
                    <Link
                      to="#"
                      className={`no-underline	text-[#5F6165] text-sm font-medium flex items-center py-0 px-4 h-[100px] rounded-[4px]
                    `}
                      onClick={() => setIsActive(item.id)}
                    >
                      {item.icon}
                      <span className="ml-4">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="w-full p-0 items-end absolute bottom-0">
              <li className="flex justify-start items-center py-2 ml-4  mr-1 h-[60px] list-none	">
                <Link
                  to="#"
                  className="no-underline	text-[#5F6165] text-sm font-medium flex items-center py-0 px-4 h-[100px] rounded-[4px]"
                >
                  <Settings />
                  <span className="ml-4">Settings</span>
                </Link>
              </li>
              <li className="flex justify-start items-center py-2 ml-4  mr-1 h-[60px] list-none	">
                <Link
                  to="/"
                  className="no-underline	text-[#5F6165] text-sm font-medium flex items-center py-0 px-4 h-[100px] rounded-[4px]"
                >
                  <LogOut />
                  <span className="ml-4">Log out</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex-[0.8]">
            <Dashboard />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Layout;
