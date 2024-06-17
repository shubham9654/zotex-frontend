export const SearchBar = ({ placeholder, searchText, setSearchText }) => {
  return (
    <>
      <div
        className={`w-[350px] rounded-[10px] relative z-10 shadow-[0px_2px_10px_rgba(201,201,201,0.25)]
		  `}
      >
        <div className="h-[45px] px-3.5 flex items-center justify-between cursor-pointer rounded-[10px] bg-white">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              fill="black"
            />
          </svg>
          <input
            className="w-full !h-[45px] pr-5 m-0 text-xs inline-flex items-center outline-none !focus:outline-none border-0 border-none focus:border-none font-poppins bg-white"
            type="text"
            placeholder={placeholder || "Search by name or desc..."}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value )}
          />
        </div>
      </div>
    </>
  );
};
