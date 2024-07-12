import searchIcon from "../assets/icons/search.svg";
import sarah from "../assets/icons/sarah.svg";
import caret from "../assets/icons/caret-down.svg";
import mobilemenu from "../assets/icons/mobile-menu.svg"

import { useDispatch } from "react-redux";
import useWindowSize from "../hooks/UseWindowSize";
import { toggleMobileSideNavState } from "../redux/slices/layoutSlice";

const Header = () => {

  const windowWidth = useWindowSize().width;


  const dispatch = useDispatch();

  const toggleMobileSideNavVisibility = () => {
    if (windowWidth < 767 || windowWidth === 767) {
      dispatch(toggleMobileSideNavState());
    } else {
      return;
    }
  };
  return (
    <div className="h-[70px] py-[20px] bg-white px-[12px] md:px-[25px] rounded-[8px] flex items-center justify-between">
      <img src={searchIcon} alt="search" className="inline-block" />
      <div className="flex items-center gap-[4px]">
        <p className="text-[#A8A8A8] text-[14px]  md:text-[16px] leading-[15px] md:leading-[21px] font-[500]">
          Sarah Shaibu
        </p>
        <img
          src={sarah}
          alt="woman"
          className="inline-block h-[36px] sm:h-full cursor-pointer"
        />
        <img
          src={caret}
          alt="woman"
          className="down arrow "
          
        />
         <img
          src={mobilemenu}
          alt="menu"
          className="inline-block md:hidden h-[30px] ml-[10px] sm:h-full cursor-pointer"
          onClick={toggleMobileSideNavVisibility}
        />
      </div>
    </div>
  );
};

export default Header;
