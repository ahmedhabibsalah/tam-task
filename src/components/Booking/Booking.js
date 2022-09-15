import React from "react";
import BookingCars from "./BookingCars";

function Booking() {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-3 bg-[#F5F5F5]  p-4">
      <h2 className="text-3xl font-bold text-[#242731]">Booking</h2>
      <BookingCars />
    </div>
  );
}

export default Booking;
