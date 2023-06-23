import React, { useState } from "react";
import { Checkbox } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const CheckboxGroup = Checkbox.Group;

const ProceedLeadInfo = ({ checkedList, setCheckedList, companies_list,changeCondition }) => {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);


  const handleClick = () => {
    // Invoke the callback function to change the condition
    changeCondition("createquotations");
  }
  // For s single select---
  const onChange = (list) => {
    const selectedObjects = list.map((value) =>
      companies_list.find((option) => option.value === value)
    );
    setCheckedList(selectedObjects);
    setIndeterminate(!!list.length && list.length < companies_list.length);
    setCheckAll(list.length === companies_list.length);
  };
  return (
    <div className="flex flex-col h-full w-[700px] min-h-[500px] bg-white  shadow-xl rounded-lg p-4">
      <div className="flex flex-row items-center justify-between border-b-[1px]">
        <div className="">
          <h2 className="text-xl tracking-wide">Create Quotation</h2>
          {/*   FOR LATER USE--- */}
          <div className="flex flex-row mb-1 mt-2">
            <button>Online</button>

            <button className="ml-5">Offline</button>
          </div>
        </div>
        <div>
          <button
            onClick={() =>handleClick()}
            className="bg-black p-2 flex flex-row justify-center items-center text-center tracking-wider font-light  text-white rounded-md hover:bg-gray-600"
          >
            PROCEED <ArrowRightOutlined className=" ml-[1px]" />
          </button>
        </div>
      </div>
      <div>
        <CheckboxGroup
        className="w-full"
          options={companies_list.map((option) => ({
            label: (
              <div className=" flex flex-row text-center items-center  w-[340px]">
                <img
                  src={option.image}
                  alt={option.label}
                  className="mt-2 w-16 h-10"
                />
                <span className="ml-4 text-base">{option.label}</span>
              </div>
            ),
            value: option.value,
          }))}
          value={checkedList.map((item) => item.value)}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ProceedLeadInfo;
