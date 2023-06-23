import React, { useState } from "react";
import { Select } from "antd";
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

  // This function is for changing the background color of select
  const handleSelectChangeBgColor = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  // this function is only for back icon---
  const handleClick = (condition) => {
    console.log("condition", condition);

    // Invoke the callback function to change the condition
    if (condition === "leadDetails") {
      changeCondition("listleads");
    } else if (condition === "createquotations") {
      changeCondition("leadDetails");
    } else if (condition === "quatationpreview") {
      changeCondition("createquotations");
    }
     else {
      return null;
      // console.log("condition")
    }
  };
  const handleSelectChange = (value) => {
    // console.log("Selected value:", value);
  };
  // Custom render options---
  const renderOption = (option) => (
    <Option key={option.value} value={option.value} label={option.label}>
      <div className="flex items-center">
        <img
          src={option.avatar}
          alt={option.label}
          className="mr-2 w-8 h-8 rounded-full"
        />
        <span>{option.label}</span>
      </div>
    </Option>
  );

  const renderSelectedOption = (selectedValue, selectedOptions) => {
    const selectedOption = selectedOptions.find(
      (option) => option.value === selectedValue
    );

    return (
      <div className="flex items-center">
        <img
          src={selectedOption.avatar}
          alt={selectedOption.label}
          className="mr-2 w-8 h-8 rounded-full"
        />
        <span>{selectedOption.label}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-row justify-between items-center text-justify">
      <div className="flex flex-row justify-center items-center gap-5">
        <LeftOutlined
          className="text-2xl mb-5"
          onClick={() => handleClick(condition)}
        />
        <div>
          <h2 className="text-2xl">Lead Details - 123</h2>
          <p>
            sales | Leads | <span className="text-sky-400">{condition}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-row justify-center items-center gap-2">
          <h2 className="text-lg">Assign To:</h2>
          <Select
            showSearch
            suffixIcon={
              <SearchOutlined className="text-lg text-gray-600 mt-1" />
            }
            defaultValue={assignData[0].value}
            onChange={handleSelectChange}
            optionLabelProp="label"
            className="w-[200px]  text-4xl font-bold bg-white tracking-wide text-black rounded-md border-gray-400 border"
            optionRender={(node) => {
              return <div>{renderOption(node)}</div>;
            }}
            valueRender={(selectedValue, selectedOptions) => {
              return renderSelectedOption(selectedValue, selectedOptions);
            }}
          >
            {assignData.map((option) => renderOption(option))}
          </Select>
        </div>

        <span className="border-l-[2px] border-gray-300 ml-2 mr-2"></span>
        <div className="flex flex-row justify-center items-center gap-2">
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
