import React from "react";
import DashboardCarCards from "./shared/DashboardCarCards";

const data = [
  {
    id: 1,
    prcentage: "64% Recommend",
    pic: "./s-car.png",
    name: "Mini Cooper",
    retweets: "132K",
    price: "$28/h",
  },
  {
    id: 2,
    prcentage: "74% Recommend",
    pic: "./w-car.png",
    name: "Porsche 911 Carrera",
    retweets: "130K",
    price: "$28/h",
  },

  {
    id: 3,
    prcentage: "74% Recommend",
    pic: "./r-car.png",
    name: "Porsche 911 Carrera",
    retweets: "130K",
    price: "$28/h",
  },
];

function DashboardCars() {
  return (
    <div className="flex items-center justify-between flex-wrap w-full">
      {data.map((item, index) => (
        <DashboardCarCards
          key={item.id}
          prcent={item.prcentage}
          rwtNumbers={item.retweets}
          imgSrc={item.pic}
          carName={item.name}
          price={item.price}
          className={`w-[290px] sm:w-[318px] ${
            item.id === 1
              ? "bg-[#E1DFA4]"
              : item.id === 2
              ? "bg-[#E3ECF1]"
              : "bg-[#F4E3E5]"
          } py-8 px-10 flex items-start justify-start gap-2 flex-col shadow-md rounded-[14px]`}
        />
      ))}
    </div>
  );
}

export default DashboardCars;
