import React from "react";

function SearchBar({ posts, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.type.includes(e.target.value) || post.date.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <form
      className="relative max-w-[200px] sm:max-w-[360px] w-full"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative max-w-[360px] w-full ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className={`block p-4 pl-10 text-sm text-gray-900 bg-[#ffffff] rounded-lg w-full`}
          placeholder="Search Or Type"
          required
          onChange={handleSearchChange}
        />
      </div>
    </form>
  );
}

export default SearchBar;
