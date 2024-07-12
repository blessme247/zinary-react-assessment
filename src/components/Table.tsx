import { useState } from "react";
import searchIcon from "../assets/icons/small-search.svg";
import Dropdown from "./Dropdown";
import { transactions } from "./data";

const statusColors = {
  Successful: "bg-[#31d067] w-[73px] text-white",
  Failed: "bg-[#ea523d] w-[51px] text-white",
  Pending: "bg-[#ffa349] w-[61px] text-white",
};

const Table = () => {
  const tabs = ["All", "Withdrawals", "Deposits", "Payments"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [sliceValue, setSliceValue] = useState(3);

  const updateTab = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const onClickBtn = () => {
    if (sliceValue === 3) {
      setSliceValue(5);
    } else {
      setSliceValue(3);
    }
  };

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <div className="bg-white py-[10px] h-[110px] rounded-[8px]">
        {/* tabs */}
        <div className="flex items-center justify-start h-[48px] relative">
          {tabs.map((tab, i) => (
            <div key={i} className="relative">
              <p
                onClick={() => updateTab(tab)}
                className={`cursor-pointer transition ease-in duration-200 text-[12px] sm:text-[14px] pl-[20px] leading-[14px] md:leading-[18px] text-[#505050] font-[700] ${
                  activeTab === tab ? "active-tab" : ""
                }`}
              >
                {tab}
              </p>
              {activeTab === tab && (
                <div className="absolute bottom-[-18px] md:bottom-[-16px] left-0 w-full h-[3px] bg-[#ff6600]"></div>
              )}
            </div>
          ))}
        </div>
        <div className="h-[1px] w-full bg-[#e0e0e0]"></div>

        <div className="w-[96%] flex items-center justify-between mx-auto  h-[54px]">
          <div className="h-[30px] relative w-[130px] sm:w-[198px]">
            <input
              type="text"
              className="border-none outline-none h-full w-full pl-[30px] py-[12px] bg-[#DEDEDE] rounded-[8px] text-[14px]"
              placeholder="Search"
            />
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-[10px] top-[9.3px] inline-block"
            />
          </div>

          <div className="flex items-center gap-[6px]">
            <p className="text-[#505050] text-[12px] font-[500] leading-[15px]">
              Display
            </p>
            <Dropdown options={["5", "10"]} width="40px" />
            <p className="text-[#505050] text-[12px] font-[500] leading-[15px]">
              Rows
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-scroll">
        <table
          className="min-w-full  border-separate"
          style={{ borderSpacing: "0 10px" }}
        >
          <thead className="">
            <tr className="w-full bg-[#848484] rounded-[8px] h-[40px] rounded-[8px] text-white text-left">
              <th className="py-2 px-4 font-[600] text-[12px]">S/N</th>
              <th className="py-2 px-4 font-[600] text-[12px]">Name</th>
              <th className="py-2 px-4 font-[600] text-[12px]">
                Transaction Reference
              </th>
              <th className="py-2 px-4 font-[600] text-[12px]">Type</th>
              <th className="py-2 px-4 font-[600] text-[12px]">Amount</th>
              <th className="py-2 px-4 font-[600] text-[12px]">Date</th>
              <th className="py-2 px-4 font-[600] text-[12px]" align="center">
                Status
              </th>
              <th className="py-2 px-4 font-[600] text-[12px]">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {transactions.slice(0, sliceValue).map((transaction) => (
              <tr key={transaction.id} className="bg-white h-[60px] ">
                <td className="py-2 px-4 text-[14px] text-[#505050] font-[400] leading-[17px]">
                  {transaction.id}
                </td>
                <td className="py-2 px-4 text-[14px] text-[#505050] font-[400] leading-[17px] min-w-[160px]">
                  {transaction.name}
                </td>
                <td className="py-2 px-4 text-[14px] text-[#505050] font-[400] leading-[17px]">
                  {transaction.reference}
                </td>
                <td className="py-2 px-4 text-[14px] text-[#505050] font-[400] leading-[17px]">
                  {transaction.type}
                </td>
                <td className="py-2 px-4 text-[14px] text-[#505050] font-[400] leading-[17px]">
                  {transaction.amount}
                </td>
                <td className="py-2 px-4 text-[14px] text-[#505050] font-[400] leading-[17px] min-w-[180px]">
                  {transaction.date}
                </td>
                <td
                  className="py-2 px-4 text-[14px] text-[#505050] font-[400] leading-[17px]"
                  align="center"
                >
                  <span
                    className={`inline-flex items-center justify-center text-white text-[10px] font-[500] h-[18px] rounded-[10px] ${
                      statusColors[transaction.status]
                    }`}
                  >
                    <span className="inline-block bg-white w-[8px] h-[8px] rounded-[100px] translate-x-[-3px]"></span>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-2 px-4 ">
                  <button className="h-[28px] w-[56px] inline-flex items-center justify-center bg-[#ec681c] text-white text-[12px] rounded-[8px]">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center w-[90px] h-[40px] mx-auto">
        <button
          onClick={onClickBtn}
          className="inline-flex items-center justify-center w-full h-full text-[14px] text-white bg-[#EC681C] outline-none border-none rounded-[8px]"
        >
          {sliceValue === 3 ? "View All" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Table;
