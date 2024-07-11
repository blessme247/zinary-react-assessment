import sidebarFooterLogo from "../assets/icons/sidebar-footer-design.svg";
import dashboardMenuIcon from "../assets/icons/dashboard-suffix-icon.svg";

import VerticalSidebar from "./VerticalSidebar";

const Sidebar = () => {
  return (
    <div className="hidden md:block w-[18%] h-screen relative pt-[32px] bg-white">
      <div className="px-[16px]">
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

      <div className="absolute bottom-0 w-full">
        <img
          src={sidebarFooterLogo}
          alt="sidebar footer"
          className="block w-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
