import React from "react";
import {
  Breaks,
  BreaksChart,
  Energy,
  EnergyChart,
  Range,
  RangeChart,
  Tire,
  TireChart,
} from "./Icons/Icons";

const data = [
  { id: 1, icon: <Energy />, title: "Energy", chart: <EnergyChart /> },
  { id: 2, icon: <Range />, title: "Range", chart: <RangeChart /> },
  { id: 3, icon: <Breaks />, title: "Break fluid", chart: <BreaksChart /> },
  { id: 4, icon: <Tire />, title: "Tire Wear", chart: <TireChart /> },
];

export default function CarInfo() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2.5 w-full">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col items-center justify-center gap-2.5 shadow-md ${
            item.id === 1 ? "bg-[#A66FF0] " : "bg-[#ffffff]"
          } w-[232px] h-[266px] rounded-[14px]`}
        >
          {item.icon}
          <h3
            className={` ${
              item.id === 1 ? "text-[#ffffff] " : "text-[#242731]"
            } text-2xl font-bold mb-4`}
          >
            {item.title}
          </h3>
          {item.chart}
        </div>
      ))}
    </div>
  );
}
