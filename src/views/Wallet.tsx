import Header from "../components/Header";

import Dropdown from "../components/Dropdown";
import { withdrawalData } from "../components/data";
import CustomLineChart from "../components/Chart";
import Table from "../components/Table";
import useWindowSize from "../hooks/UseWindowSize";

const Wallet = () => {
  const windowWidth = useWindowSize().width;

  return (
    <div className="w-full">
      <Header />

      <div className="flex flex-col items-start mt-[30px] w-full gap-[36px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#505050] text-[17px] md:text-[24px] font-[700] leading-[15px] md:leading-[21px]">
            Wallet Overview
          </p>
          <div className="flex items-center gap-[4px]">
            <p className="text-[#505050] text-[12px] font-[600] leading-[15px]">
              Duration
            </p>
            <Dropdown options={["Today", "Tomorrow"]} />
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#e1e1e1] "></div>

        <div
          className={`flex flex-col md:flex-row md:flex-wrap gap-[24px] md:gap-0 items-start justify-between w-full `}
        >
          <div
            className={` h-[342px] bg-white rounded-[8px] p-[16px] shadow-custom ${
              windowWidth > 768 && windowWidth < 1024
                ? "w-[58%]"
                : windowWidth > 900
                ? "w-[27%]"
                : "w-full"
            }`}
          >
            <div className="flex flex-col w-full gap-[24px]">
              <div className="w-full flex flex-wrap gap-[12px] justify-between">
                {withdrawalData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-[#fff7e5] rounded-[8px] p-[12px] w-[47%] sm:w-[46.8%] lg:w-[46%]  h-[110px]"
                    >
                      <p className="text-[#505050] text-[12px] font-[700] mt-[10px]">
                        {item.title}
                      </p>
                      <p className="text-[#FF6600] text-[14px] xl:text-[16px] font-[600] xl:font-[700] leading-[14px] xl:leading-[17px] mt-[10px]">
                        {item.amount}
                      </p>
                      <p className="text-[#505050] text-[12px] font-[700] mt-[2px]">
                        {item.cases}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="w-full bg-[#505050] h-[58px] rounded-[8px] py-[10px] px-[12px] flex items-center justify-between">
                <p className="text-white text-[12px] font-[700]">
                  Total Amount
                </p>
                <p className="text-white text-[14px] md:text-[16px] font-[700] leading-[14px] md:leading-[17px]">
                  N3,402,300
                </p>
              </div>
            </div>
          </div>
          <div
            className={` h-[342px] bg-[#ec681c] rounded-[8px] p-[16px] ${
              windowWidth > 768 && windowWidth < 1024
                ? "w-[40%]"
                : windowWidth > 900
                ? "w-[16%]"
                : "w-full"
            }`}
          >
            <div className="h-[303px] flex flex-col justify-between">
              <div className="h-[35px] flex flex-col justify-between">
                <p className="text-[12px] font-[400] text-white">
                  Total Withdrawals
                </p>
                <p className="text-[16px] font-[700] text-white leading-[17px]">
                  N3,402,300
                </p>
              </div>
              <div className="h-[1px] bg-white w-full"></div>

              <div className="h-[35px] flex flex-col justify-between">
                <p className="text-[12px] font-[400] text-white">
                  Total Deposits
                </p>
                <p className="text-[16px] font-[700] text-white leading-[17px]">
                  N3,402,300
                </p>
              </div>
              <div className="h-[1px] bg-white w-full"></div>

              <div className="h-[35px] flex flex-col justify-between">
                <p className="text-[12px] font-[400] text-white">
                  Total Payments
                </p>
                <p className="text-[16px] font-[700] text-white leading-[17px]">
                  N3,402,300
                </p>
              </div>
              <div className="h-[1px] bg-white w-full"></div>

              <div className="h-[35px] flex flex-col justify-between">
                <p className="text-[12px] font-[400] text-white">
                  Total Commission
                </p>
                <p className="text-[16px] font-[700] text-white leading-[17px]">
                  N3,402,300
                </p>
              </div>
              <div className="h-[1px] bg-white w-full"></div>

              <div className="h-[35px] flex flex-col justify-between">
                <p className="text-[12px] font-[400] text-white">
                  Total Amount
                </p>
                <p className="text-[16px] font-[700] text-white leading-[17px]">
                  N3,402,300
                </p>
              </div>
            </div>
          </div>
          <div
            className={` bg-white h-[342px] shadow-custom rounded-[8px] ${
              windowWidth > 768 && windowWidth < 1024
                ? "w-full mt-[24px]"
                : windowWidth > 900
                ? "w-[53%]"
                : "w-full"
            }`}
          >
            <p className="text-[12px] font-[700] text-[#505050]  ml-[35px] translate-y-[20px]">
              Real-Time Update
            </p>
            <CustomLineChart />

            <div className="bg-[#f4f4f4] w-[90%] mx-auto rounded-[8px] px-[44px] py-[10px] h-[27px] translate-y-[-20px]">
              <div className="w-[80%] sm:w-[60%] mx-auto h-full flex items-center justify-between">
                <div className="flex items-center gap-[4px]">
                  <div className="h-[8px] w-[8px] rounded-[100px] bg-[#FFD88B]"></div>
                  <p className="text-[12px] text-[#505050] font-[400] leading-[17px]">
                    Withdrawal
                  </p>
                </div>

                <div className="flex items-center gap-[4px]">
                  <div className="h-[8px] w-[8px] rounded-[100px] bg-[#F29560]"></div>
                  <p className="text-[12px] text-[#505050] font-[400] leading-[17px]">
                    Deposit
                  </p>
                </div>

                <div className="flex items-center gap-[4px]">
                  <div className="h-[8px] w-[8px] rounded-[100px] bg-[#C4C4C4]"></div>
                  <p className="text-[12px] text-[#505050] font-[400] leading-[17px]">
                    Payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Table />
      </div>
    </div>

    // 25, 15, 53
  );
};

export default Wallet;
