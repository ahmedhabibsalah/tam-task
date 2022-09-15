import React, { useEffect, useState } from "react";
import DashboardCarCards from "../shared/DashboardCarCards";

function DashboardCars() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dashboard")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
        // console.log(result);
      });
  }, []);
  return (
    <div className="flex items-center justify-between flex-wrap w-full">
      {posts.map((item, index) => (
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
