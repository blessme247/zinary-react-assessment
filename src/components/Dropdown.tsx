import { useState } from "react";
import caret from "../assets/icons/caret-down.svg";
import { generateRandomKey } from "../utils/generateRandomKey";

interface Props {
  options: string[];
  width?: string;
}
const Dropdown = ({ options, width }: Props) => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleDropdownToggle = () => {
    setDropdownToggled(!dropdownToggled);
  };
  const handleOptionSelect = (item: string) => {
    setSelectedOption(item);
    handleDropdownToggle();
  };

  return (
    <div className={`relative ${width || "w-[90px]"}`}>
      <div
        className="w-full border border-solid border-[#e1e1e1] rounded-[8px] h-[30px] p-[12px] flex items-center justify-between cursor-pointer"
        style={{ backgroundColor: width ? "#e1e1e1" : "white" }}
        tabIndex={0}
        role="button"
        aria-expanded={dropdownToggled}
        aria-haspopup="listbox"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleDropdownToggle();
          }
        }}
        onClick={handleDropdownToggle}
      >
        <p className="text-[12px] font-[500] leading-[21px] text-[#505050]">
          {selectedOption}
        </p>
        <img
          className={`inline-block  transition ease-in duration-200 ${
            dropdownToggled ? "rotate-180" : "rotate-0"
          }`}
          src={caret}
          alt="arrow"
        />
      </div>

      {dropdownToggled && (
        <ul
          className="absolute z-10 top-[34px] shadow-lg bg-white rounded-[8px] inline-block py-[8px]"
          style={{ width: width ? "45px" : "90px" }}
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={generateRandomKey(6)}
              className="w-full text-[12px] font-[500] leading-[21px] text-[#505050] cursor-pointer px-[5px] transition ease-in duration-200 hover:bg-[#fdefe7]"
              role="option"
              aria-selected={selectedOption === option}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  handleOptionSelect(option);
                }
              }}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
