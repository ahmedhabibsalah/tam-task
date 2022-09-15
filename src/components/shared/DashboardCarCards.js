import React from "react";
import { Adjust, Rotate, Rwt, Support } from "../Icons/Icons";

function DashboardCarCards({
  className,
  prcent,
  imgSrc,
  carName,
  rwtNumbers,
  price,
}) {
  return (
    <div className={className}>
      <div className="flex items-center ">
        <Rotate />
        <h3 className="text-base font-bold text-[#242731] ml-2">{prcent}</h3>
      </div>
      <img src={imgSrc} alt={carName} className="w-[257px] h-[106px]" />

      <h2 className="text-xl font-bold text-[#242731]">{carName}</h2>
      <div className="w-full flex items-center justify-between">
        <div className="max-w-[130px] w-full flex items-center justify-between">
          <Rwt />
          <p className="text-[#72767C] text-sm font-medium">{rwtNumbers}</p>
          <Adjust />
          <Support />
        </div>
        <p className="text-[#72767C] text-sm font-medium">{price}</p>
      </div>
    </div>
  );
}

export default DashboardCarCards;
