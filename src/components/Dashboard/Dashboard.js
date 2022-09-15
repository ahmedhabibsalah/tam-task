import React from "react";
import CarInfo from "./CarInfo";
import DashboardCars from "./DashboardCars";
import Features from "./Features";

function Dashboard() {
  return (
    <div className="flex items-center justify-between flex-col p-4 bg-[#F5F5F5] w-full gap-12">
      <CarInfo />
      <Features />
      <DashboardCars />
    </div>
  );
}

export default Dashboard;
