import React from "react";
import { Notification } from "../Icons/Icons";

function Account() {
  return (
    <div className="flex flex-row justify-around my-6 sm:my-0 items-center w-full sm:w-[106px] py-2 pl-4 ">
      <Notification />
      <img
        src="./avatar.png"
        alt="avatar"
        className="rounded-[50%] w-6 h-6 sm:w-14 sm:h-14 ml-4"
      />
    </div>
  );
}

export default Account;
