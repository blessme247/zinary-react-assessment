import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import caret from "../assets/icons/caret-right.svg";

import navdata from "./SidebarMenuData";
import { generateRandomKey } from "../utils/generateRandomKey";

interface NavItem {
  id: string;
  label: string;
  icon: React.FC<{ fill: string }>;
  link: string;
  click?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  subItems?: SubItem[];
}

interface SubItem {
  id: string;
  label: string;
  link: string;
}

const NavItemComponent = ({
  item,
  path,
  navigate,
  subMenuVisibility,
  setSubMenuVisibility,
}: {
  item: NavItem;
  path: string;
  navigate: any;
  subMenuVisibility: boolean;
  setSubMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <li className={`cursor-pointer relative`}>
    <Link
      role="button"
      onClick={(e) => {
        if (item.click) {
          item.click(e);
        }
        navigate(item.link);
        setSubMenuVisibility(!subMenuVisibility);
      }}
      className="inline-flex w-full items-center justify-between py-[11px] pr-[14px] pl-[24px] hover:bg-[#fbf6f2] transition ease-in duration-300"
      style={{ background: path === item.link ? "#fdefe7" : "" }}
      to={item.link || "/#"}
    >
      <div className="flex gap-[15px] items-center">
        <item.icon fill={path === `${item.link}` ? "#ff6600" : "#505050"} />
        <span
          className="text-[#505050] text-[14px] leading-[16.5px]"
          style={{ fontWeight: path === item.link ? "700" : "400" }}
        >
          {item.label}
        </span>
      </div>
      <img
        className="caretIcon inline-block transition ease-in duration-200"
        src={caret}
        alt="arrow"
        style={{ transform: subMenuVisibility ? "rotate(90deg)" : "" }}
      />
    </Link>
    {path === `${item.link}` && (
      <div className="absolute top-0 left-0 h-[39px] w-[2px] bg-[#ff6600] transition ease-out duration-250"></div>
    )}
    <ul
      className="flex flex-col transition ease-in duration-300"
      style={{ display: !subMenuVisibility ? "none" : "block" }}
    >
      {item.subItems?.map((subItem, subKey) => (
        <SubItemComponent key={subKey} subItem={subItem} path={path} />
      ))}
    </ul>
  </li>
);

const SubItemComponent = ({
  subItem,
  path,
}: {
  subItem: SubItem;
  path: string;
}) => (
  <li
    className="cursor-pointer relative hover:bg-[#fbf6f2] transition ease-in duration-300"
    style={{ background: path === subItem.link ? "#fdefe7" : "" }}
  >
    <Link
      to={subItem.link || "/#"}
      className="inline-flex items-center gap-[15px] py-[11px] pr-[8px] text-[#505050] text-[14px] leading-[16.5px] pl-[54px]"
      style={{ fontWeight: path === subItem.link ? "700" : "400" }}
    >
      {subItem.label}
    </Link>
    {path === `${subItem.link}` && (
      <div className="absolute top-0 left-0 h-[39px] w-[2px] bg-[#ff6600] transition ease-out duration-250"></div>
    )}
  </li>
);

const VerticalSidebar = () => {
  const navData = navdata();
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const [subMenuVisibility, setSubMenuVisibility] = useState(true);

  return (
    <React.Fragment>
      {navData.map((item) => (
        <React.Fragment key={generateRandomKey(7)}>
          {item.subItems ? (
            <NavItemComponent
              item={item}
              path={path}
              navigate={navigate}
              subMenuVisibility={subMenuVisibility}
              setSubMenuVisibility={setSubMenuVisibility}
            />
          ) : (
            <li
              className="cursor-pointer relative hover:bg-[#fbf6f2] transition ease-in duration-300"
              style={{ background: path === item.link ? "#fdefe7" : "" }}
            >
              <Link
                className="inline-flex items-center gap-[15px] py-[11px] pr-[8px] pl-[24px] w-full"
                to={item.link || "/#"}
              >
                <item.icon
                  fill={path === `${item.link}` ? "#ff6600" : "#505050"}
                />
                <span
                  className="text-[#505050] text-[14px] leading-[16.5px]"
                  style={{ fontWeight: path === item.link ? "700" : "400" }}
                >
                  {item.label}
                </span>
              </Link>
              {path === `${item.link}` && (
                <div className="absolute top-0 left-0 h-[39px] w-[2px] bg-[#ff6600] transition ease-out duration-250"></div>
              )}
            </li>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default VerticalSidebar;
