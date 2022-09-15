import React from "react";

export default function LoanCard() {
  return (
    <div className="flex items-center  justify-between flex-wrap bg-[#FFE0BA] rounded-[4px] h-fit min-h-[222px] w-full max-w-[554px] shadow-md">
      <div className="flex flex-col items-start gap-2 ml-6">
        <h3 className="text-[#0F2837] text-2xl font-bold">
          Apply for a car loan !
        </h3>
        <h6 className="text-[#0F2837] text-base">
          This is a sample of a generated text
        </h6>
        <button className="bg-[#0F2837] text-[#ffffff] rounded-[4px] shadow-lg w-[125px] h-[38px] mt-3">
          Discover More
        </button>
      </div>
      <div className="mr-6">
        <img src="./loan.png" alt="loan" className="w-[216px] h-[185px]" />
      </div>
    </div>
  );
}
