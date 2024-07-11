import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import caret from "../assets/icons/caret-right.svg"

import navdata from './SidebarMenuData';


interface NavItem {
  id: string;
  label: string;
  icon: React.FC<{ fill: string }>;
  link: string;
  stateVariables?: boolean;
  click?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  subItems?: SubItem[];
  badgeName?: string;
  badgeColor?: string;
  isHeader?: boolean;
}

interface SubItem {
  id: string;
  label: string;
  link: string;
  parentId: string;
  isChildItem?: boolean;
  badgeName?: string;
  badgeColor?: string;
  permission?: boolean;
}


const VerticalSidebar = () => {

  const navData = navdata();
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate()

  const [subMenuVisibility, setSubMenuVisibility] = useState(true)
  


  return (
    <React.Fragment>
      {/* menu Items */}
      {(navData || [])
        .map((item: NavItem, key: number) => {
          return (
            <React.Fragment key={key}>
              {item.subItems ? (
                <li className={`cursor-pointer relative`}>
                  <Link
                    onClick={(e)=>{
                        if(item.click){
                            item.click(e)
                        }
                        navigate('/')
                        setSubMenuVisibility(!subMenuVisibility)
                    }}
                    className={`inline-flex  w-full items-center justify-between py-[11px] pr-[14px] pl-[24px] hover:bg-[#fbf6f2] transition ease-in duration-300 ${path === `${item.link}` ? "bg-[#fdefe7]" : ""}`}
                    to={item.link || '/#'}
                  >
                    <div className='flex gap-[15px] items-center'>
                    <item.icon fill={path === `${item.link}`  ? "#ff6600" : "#505050"} />
                    <span  className={`text-[#505050] text-[14px] leading-[16.5px] ${path === `${item.link}` ? "font-[700]" : "font-[400]"}`}>{item.label}</span>
                    </div>

                    <img className='caretIcon inline-block  transition ease-in duration-200' src={caret} alt="arrow" />
                   
                  </Link>

                  {path === `${item.link}` && <div className='absolute top-0 left-0 h-[39px] w-[2px] bg-[#ff6600] transition ease-out duration-250 ' ></div>}
                 
                    <ul className={`${!subMenuVisibility ? 'hidden ' : 'block' } flex flex-col transition ease-in duration-300`}>
                      {/* subItems  */}
                      {(item.subItems || [])
                        .map((subItem: SubItem, subKey: number) => (
                          <React.Fragment key={subKey}>
                            {!subItem.isChildItem ? (
                              <li className={`cursor-pointer relative hover:bg-[#fbf6f2] transition ease-in duration-300 ${path === `${subItem.link}` ? "bg-[#fdefe7]" : ""} `}>
                                <Link
                                  to={subItem.link || '/#'}
                                  className={`inline-flex items-center gap-[15px] py-[11px] pr-[8px] text-[#505050] text-[14px] leading-[16.5px] pl-[54px] ${path === `${subItem.link}` ? "font-[700]" : "font-[400]"}`}
                                >
                                  {subItem.label}
                                  
                                </Link>

                                {path === `${subItem.link}` && <div className='absolute top-0 left-0 h-[39px] w-[2px] bg-[#ff6600]  transition ease-out duration-250' ></div>}
                              </li>
                            ) : (
                              <div />
                            )}
                          </React.Fragment>
                        ))}
                    </ul>
                </li>
              ) : (
                <li className={`cursor-pointer relative hover:bg-[#fbf6f2] transition ease-in duration-300 ${path === `${item.link}` ? "bg-[#fdefe7]" : ""}`}>
                  <Link
                    className="inline-flex items-center gap-[15px] py-[11px] pr-[8px] pl-[24px] w-full"
                    to={item.link || '/#'}
                  >
                    <item.icon fill={path === `${item.link}`  ? "#ff6600" : "#505050"} />
                    <span  className={`text-[#505050] text-[14px] leading-[16.5px] ${path === `${item.link}` ? "font-[700]" : "font-[400]"}`}>{item.label}</span>
                   
                  </Link>
                  
                  {path === `${item.link}` && <div className='absolute top-0 left-0 h-[39px] w-[2px] bg-[#ff6600] transition ease-out duration-250 ' ></div>}
                </li>
              )}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

export default VerticalSidebar;
