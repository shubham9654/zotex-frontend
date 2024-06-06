import { useRef, useState } from "react";
import { OutsideClickListner } from "../../hooks/OutSideClickListner";

const dummyOptions = ["Tony Stark", "Option 1", "Option 2", "Option 3"];

export const SearchBar = ({ placeholder, border }) => {
  const wrapperRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [options, setOptions] = useState(dummyOptions);

  const handleSearch = ({ value, closeOption }) => {
    setSearchText(value);
    setOptions(
      dummyOptions.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    if (closeOption) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  };

  const handleOutsideClick = () => {
    setIsSelected(false);
  };

  OutsideClickListner({ ref: wrapperRef, closeBox: handleOutsideClick });

  return (
    <>
      <div
        ref={wrapperRef}
        className={`w-[350px] rounded-[10px] relative z-10 shadow-[0px_2px_10px_rgba(201,201,201,0.25)]
			  ${isSelected && "bg-white"}
				${border || ""}
		  `}
      >
        <div
          className="h-[45px] px-3.5 flex items-center justify-between cursor-pointer rounded-[10px] bg-white"
          onClick={() => setIsSelected(!isSelected)}
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              fill="black"
            />
          </svg>
          <input
            className="w-full !h-[45px] pr-5 m-0 text-xs inline-flex items-center outline-none !focus:outline-none border-0 border-none focus:border-none font-poppins bg-white"
            type="text"
            placeholder={placeholder || "Search products"}
            value={searchText}
            onChange={(e) => handleSearch({ value: e.target.value })}
          />
        </div>
        <div
          className={`absolute w-full transition-all duration-700 top-12 rounded-[10px] border-b-lg bg-white shadow-[0px_2px_10px_rgba(201,201,201,0.25)]
					${!isSelected && "hidden"}
				`}
        >
          <ul className="px-1 py-1">
            {options.map((option) => (
              <li
                key={option}
                className="px-2 py-2 flex flex-col text-xs rounded-md cursor-pointer font-poppins hover:bg-[#F6F8F9]"
                onClick={() =>
                  handleSearch({ value: option, closeOption: true })
                }
              >
                <span className="text-black font-medium font-poppins">
                  {option}
                </span>
                <span className="text-[#ABABAB]">
                  Ankit | BHD2587N | 7014587528
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
