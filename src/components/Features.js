import React from "react";
import LoanCard from "./shared/LoanCard";
import Rewards from "./shared/Rewards";

export default function Features() {
  return (
    <div className="flex w-full flex-wrap justify-between gap-2">
      <LoanCard />
      <Rewards />
    </div>
  );
}
