import React, { useState } from "react";
import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// dummy select data---
const assingnData = [
  "John Doe",
  "Rahul Sharma",
  "Virat Kohli",
  "Vinod Singh",
  "Pratak Roy",
];
const myArray = ["DRAFTED", "QUOTED", "CONVERTED"];

const LeadDetailsHeader = () => {
  const [selectedValue, setSelectedValue] = useState(myArray[0]);

  //This function is for chnging Bg color of select---
  const handleSelectChangeBgColor = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  return (
    <div className="flex flex-row justify-between items-center text-justify ">
      <div>
        <h2 className="text-2xl"> Lead Details - 123</h2>
        <p> sales | Leads | Lead Detail</p>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-row justify-center  items-center gap-2">
          <h2 className="text-lg"> Assign To: </h2>
          <Select
            showSearch
            suffixIcon={<SearchOutlined className=" text-xl text-gray-600" />}
            defaultValue={assingnData[0]}
            // onChange={}
            options={assingnData.map((entry_) => ({
              label: entry_,
              value: entry_,
            }))}
            className="w-[160px] bg-white h-12  text-3xl tracking-wide text-black rounded-md border-gray-400 border"
          />
        </div>
        <span className="border-l-[2px] border-gray-300 ml-2 mr-2"></span>
        <div className="flex flex-row justify-center  items-center gap-2">
          <Select
            defaultValue={myArray[0]}
            onChange={(selectedOption) =>
              handleSelectChangeBgColor(selectedOption)
            }
            options={myArray.map((entry_) => ({
              label: entry_,
              value: entry_,
            }))}
            className={`w-[160px] tracking-wider text-white rounded-lg ${
              selectedValue === "QUOTED"
                ? "bg-yellow-400"
                : selectedValue === "DRAFTED"
                ? "bg-gray-600"
                : "bg-green-700"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsHeader;
