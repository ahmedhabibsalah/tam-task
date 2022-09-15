import React, { useEffect, useState } from "react";
import { Filter, SearchAdjust } from "../Icons/Icons";
import BookingCard from "../shared/BookingCard";
import SearchBar from "../shared/SearchBar";

const dateOptions = [
  { id: 1, value: "All" },
  { id: 2, value: "New" },
  { id: 3, value: "Old" },
];

const typeOptions = [
  { id: 1, value: "All" },
  { id: 2, value: "light" },
  { id: 3, value: "dark" },
];
function BookingCars() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/booking")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
        setSearchResults(result);
        // console.log(result);
      });
  }, []);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const filtered = searchResults.filter((optionValue) => {
    if (value === "All") {
      return posts;
    } else if (optionValue.date === value) {
      return optionValue.date === value;
    } else if (optionValue.type === value) {
      return optionValue.type === value;
    }
    return "";
  });
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-2 w-full">
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
        <div className="w-[281px] flex justify-between items-center gap-2">
          <div className="relative w-[122px]">
            <svg
              className="absolute top-[15px] right-[20px] z-[1]"
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9142 0C12.4592 0 12.7622 0.630456 12.4218 1.05605L6.84083 8.03221C6.58062 8.35748 6.08591 8.35748 5.8257 8.03221L0.244776 1.05605C-0.0957007 0.630455 0.207312 0 0.752341 0L11.9142 0Z"
                fill="#B4B4C6"
              />
            </svg>

            <select
              value={value}
              onChange={handleChange}
              className="w-[122px] h-[36px] px-[20px] text-[#5F6165] relative bg-white  rounded-[22.5px] shadow-sm   font-medium text-base appearance-none"
            >
              {dateOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <div className="relative w-[122px]">
            <svg
              className="absolute top-[15px] right-[20px] z-[1]"
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9142 0C12.4592 0 12.7622 0.630456 12.4218 1.05605L6.84083 8.03221C6.58062 8.35748 6.08591 8.35748 5.8257 8.03221L0.244776 1.05605C-0.0957007 0.630455 0.207312 0 0.752341 0L11.9142 0Z"
                fill="#B4B4C6"
              />
            </svg>

            <select
              value={value}
              onChange={handleChange}
              className="w-[122px] h-[36px] px-[20px] text-[#5F6165] relative bg-white  rounded-[22.5px] shadow-sm   font-medium text-base appearance-none"
            >
              {typeOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <SearchAdjust />
          <Filter />
        </div>
      </div>{" "}
      <div className="flex w-full justify-center items-center gap-3 flex-wrap bg-[#F5F5F5]  p-4">
        {filtered.map((post) => (
          <BookingCard key={post.id} src={post.src} alt={post.type} />
        ))}
      </div>
    </>
  );
}

export default BookingCars;
