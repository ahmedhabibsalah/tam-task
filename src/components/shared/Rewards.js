import React from "react";
import TextStyle from "./TextStyle";

const data = [
  {
    id: 1,
    text: "You have earned 20 Badges!",
    para: "Hooray! Way to go Mohammed!",
    pic: "./badge.png",
  },
  {
    id: 2,
    text: "You have earned 1500 Points!",
    para: "Redeem and claim your rewards!",
    pic: "./point.png",
  },
];
function Rewards() {
  return (
    <div className="flex flex-wrap items-center justify-evenly max-w-[554px] w-full gap-4 ">
      {data.map((item, index) => (
        <div
          className={`flex  flex-row relative justify-center w-[210px] h-[222px] rounded-[4px] ${
            item.id === 1 ? "bg-[#0F2837]" : "bg-[#6E1946]"
          }`}
          key={item.id}
        >
          <div className="flex flex-col ml-8 mt-7">
            <TextStyle
              text={item.text}
              coloredIndices={[3]}
              color={item.id === 1 ? "#FF9619" : "#FAC39B"}
            />
          </div>
          <img
            src={item.pic}
            alt={item.text}
            className={`${
              item.id === 1 ? "w-[110px] h-[110px]" : "w-[101px] h-[101px]"
            } mr-8 mt-7`}
          />
          <p
            className={`text-xs absolute bottom-2 left-2 ${
              item.id === 1 ? " text-[#FF9619]" : "text-[#FAC39B]"
            }`}
          >
            {item.para}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Rewards;
