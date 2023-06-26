import React, { useState } from "react";
import { Select, Avatar } from "antd";
import { SearchOutlined, LeftOutlined } from "@ant-design/icons";
const { Option } = Select;
const assignData = [
  {
    id: "1",
    avatar:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    label: "Rahul",
    value: "Rahul",
  },
  {
    id: "2",
    avatar: "https://placekitten.com/250/250",
    label: "Kohli",
    value: "Kohli",
  },
  {
    id: "3",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    label: "Vinod",
    value: "Vinod",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    label: "Pratik",
    value: "Pratik",
  },
  {
    id: "5",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    label: "Gautam",
    value: "Gautam",
  },
];
const myArray = ["DRAFTED", "QUOTED", "CONVERTED"];

const LeadDetailsHeader = ({ condition, changeCondition }) => {
  const [selectedValue, setSelectedValue] = useState(myArray[0]);
  // console.log("selectedValue", selectedValue);

  // This function is for changing the background color of select
  const handleSelectChangeBgColor = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  // this function is only for back icon---
  const handleClick = (condition) => {
    // Invoke the callback function to change the condition
    if (condition === "leadDetails") {
      changeCondition("listleads");
    } else if (condition === "createquotations") {
      changeCondition("leadDetails");
    } else if (condition === "quatationpreview") {
      changeCondition("createquotations");
    } else {
      return null;
    }
  };
  const handleSelectChange = (value) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex flex-row justify-between items-center text-justify">
      <div className="flex flex-row justify-center items-center gap-5">
        <LeftOutlined
          className="text-l mb-5"
          onClick={() => handleClick(condition)}
        />
        <div>
          <h2 className="text-xl font-light">
            {" "}
            Lead Details -{" "}
            <span className="text-xl font-light text-grey-60">123</span>
          </h2>
          <p className="tracking-wider">
            Sales | Leads | <span className="text-primary-60">{condition}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-row justify-center items-center gap-2">
          <h2 className="text-m font-light">Assign To:</h2>

          <Select
            showSearch
            suffixIcon={
              <SearchOutlined className="text-xl text-grey-50 mt-1" />
            }
            onChange={handleSelectChange}
            className="w-[200px]  h-full  text-3xl font-bold bg-white tracking-wide text-grey rounded-md border-grey-80  border-2"
          >
            {assignData.map((option) => (
              <Option
                key={option.id}
                value={option.value}
                className="flex flex-col"
              >
                <div className="flex flex-row items-center m-auto  gap-2">
                  <Avatar size="default" src={option.avatar} />
                  <p>{option.label}</p>
                </div>
              </Option>
            ))}
          </Select>
        </div>

        <span className="border-l-[1px] border-grey-50 ml-2 mr-2"></span>
        <div className="flex flex-row justify-center items-center gap-2">
          <Select
            defaultValue={myArray[0]}
            onChange={(selectedOption) =>
              handleSelectChangeBgColor(selectedOption)
            }
            options={myArray.map((entry_) => ({
              label: entry_,
              value: entry_,
              label2: entry_,
            }))}
            className={`w-[160px] tracking-wider text-white rounded-lg justify-center text-center items-center ${
              selectedValue === "QUOTED"
                ? "bg-yellow"
                : selectedValue === "DRAFTED"
                ? "bg-grey-50"
                : "bg-green-90"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsHeader;
