import React, { useState } from "react";
import { Person, Rwt } from "../Icons/Icons";

export default function BookingCard({ src, alt }) {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className="flex flex-col p-6 items-start justify-start gap-2 w-[290px] sm:w-[325px] h-[267px] rounded-[16px] bg-[#ffffff]">
      <div className="flex w-full justify-between items-center">
        <h4 className="text-lg font-bold text-[#242731]">
          Porshe 718 Cayman S
        </h4>
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleActive}
        >
          <path
            d="M17.8164 2.1838L17.8164 2.18386C19.7279 4.095 19.7279 7.20702 17.816 9.11817L17.8159 9.11827L9.99973 16.9345L2.18359 9.11833C0.27226 7.20662 0.272051 4.09447 2.18348 2.18342C4.09512 0.272164 7.20731 0.272239 9.11844 2.18337C9.22469 2.28962 9.32568 2.4004 9.42202 2.51699L9.99923 3.21548L10.5775 2.5179C10.6749 2.40047 10.7762 2.28905 10.8814 2.18386C12.793 0.272598 15.9052 0.272674 17.8164 2.1838Z"
            stroke="#A4A5A6"
            strokeWidth="1.5"
            fill={`${active ? "#F84F56" : ""}`}
          />
        </svg>
      </div>
      <p className="text-[#72767C] text-base w-full text-start mt-[-5px] mb-[4]">
        Coupe
      </p>
      <img src={src} alt={alt} className="mx-[22px] w-[233px] h-[105px]" />
      <div className="flex justify-between items-center w-full mt-4">
        <div className="w-[131px] flex justify-between items-center">
          <p className="text-lg text-[#72767C] flex items-center">
            <Person /> <span className="ml-1">4</span>
          </p>
          <p className="text-lg  text-[#72767C] flex items-center ">
            <Rwt /> <span className="ml-1">Manual</span>
          </p>
        </div>
        <div className="flex items-center text-[#72767C] text-lg font-normal ">
          <h3 className="text-lg font-medium text-[#242731]">$400</h3>/d
        </div>
      </div>
    </div>
  );
}
