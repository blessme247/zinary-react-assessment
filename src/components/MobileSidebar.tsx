import dashboardMenuIcon from "../assets/icons/dashboard-suffix-icon.svg";

import VerticalSidebar from "./VerticalSidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import closeMenuIcon from "../assets/icons/cancel.svg";
import { toggleMobileSideNavState } from "../redux/slices/layoutSlice";

const MobileSidebar = () => {
  const open = useSelector(
    (state: RootState) => state.layout.mobileSideNavOpen
  );

  const dispatch = useDispatch();

  const closeSideNav = () => {
    dispatch(toggleMobileSideNavState());
  };

  return (
    <div
      className={`${
        open ? "translate-x-[0%]" : "translate-x-[-100%]"
      } top-0  z-40 w-[65%] h-full absolute pt-[30px] bg-white transition ease-in duration-250 overflow-y-hidden`}
    >
      <div className="w-full flex justify-end pr-[20px]">
        <div
          className="bg-[#fdefe7] rounded-[100px] h-[30px] cursor-pointer w-[30px] pl-[4px] pr-[7px]  flex items-center "
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              closeSideNav();
            }
          }}
          onClick={closeSideNav}
        >
          <img className="inline-block" src={closeMenuIcon} alt="close" />
        </div>
      </div>
      <div className="px-[16px] mt-[20px]">
        <div className="bg-[#ff6600] rounded-[8px] flex items-center justify-between p-[12px]">
          <p className="text-[14px] text-white leading-[16px]">
            General <br /> Dashboard
          </p>

          <img className="block" src={dashboardMenuIcon} alt="arrow" />
        </div>
      </div>

      <ul className="w-full inline-block mt-[40px]">
        <VerticalSidebar />
      </ul>
    </div>
  );
};

export default MobileSidebar;
