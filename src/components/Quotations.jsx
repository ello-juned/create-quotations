import React, { useState } from "react";
import { InputNumber, Select } from "antd";
import { FileFilled } from "@ant-design/icons";

const Quotations = ({
  options,
  inputFields,
  checkedList,
  setCheckedList,
  quotation,
  setQuotation,
  changeCondition,
  onlineOfflineBtn,
  setOnlineOfflineBtn,
}) => {
  const [listCoverage, setListCoverage] = useState([]);

  const handleChange = (value, index) => {
    const updatedListCoverage = [...listCoverage];
    updatedListCoverage[index] = value;
    setListCoverage(updatedListCoverage);
  };

  const handleClick = () => {
    // Invoke the callback function to change the condition
    changeCondition("quatationpreview");
  };

  // this function will  be trigger after submit the form----
  // please check console for output---
  const handlePreview = () => {
    const premiums = {};

    checkedList.forEach((entry_value, index) => {
      const coverageInputs = listCoverage[index] || [];
      const inputs = {};

      inputFields.forEach((field) => {
        const value = document.getElementById(
          `${entry_value}-${field.value}`
        ).value;
        inputs[field.label] = value;
      });

      if (!premiums[entry_value.label]) {
        premiums[entry_value.label] = {};
      }

      premiums[entry_value.label][entry_value.value] = {
        coverage: coverageInputs.reduce((obj, entry, subIndex) => {
          const inputValue = document.getElementById(
            `${entry_value}-${entry}-${subIndex}`
          ).value;
          obj[entry] = inputValue;
          return obj;
        }, {}),
        inputs,
      };
    });
    handleClick();
    setQuotation(premiums);
  };

  return (
    <div className="flex flex-col w-full h-full min-h-[400px] bg-white  shadow-custom rounded-lg p-4">
      {/* HEADER */}
      <div className="flex flex-row items-center justify-between border-b-[1px]">
        <div className="w-[20%]">
          <h2 className="text-2xl">Create Quotation</h2>
          {/*   FOR LATER USE--- */}
          <div className="flex flex-row mb-1 mt-2">
            <button
              onClick={() => setOnlineOfflineBtn(true)}
              className={`${
                !onlineOfflineBtn
                  ? "border-b-4 rounded-sm border-primary-90"
                  : "text-primary"
              }`}
            >
              Online
            </button>
            <button
              className={`ml-5 ${
                onlineOfflineBtn
                  ? "border-b-4 rounded-sm border-primary-90"
                  : "text-primary"
              }`}
              onClick={() => setOnlineOfflineBtn(false)}
            >
              Offline
            </button>
          </div>
        </div>
        <div>
          <button className="bg-black p-2 w-22 flex flex-row justify-center items-center text-center tracking-wider font-light text-white rounded-md hover:bg-grey-50">
            <span className="flex items-center" onClick={handlePreview}>
              PREVIEW <FileFilled className=" ml-2 " />
            </span>
          </button>
        </div>
      </div>
      {/* CARD */}
      {checkedList.map((entry_value, index) => {
        return (
          <div className="border-[1px] mt-4 p-4 rounded-lg" key={index}>
            <div className="flex flex-row  items-center justify-between mt-5">
              <div className="flex flex-row justify-center items-center">
                <img
                  src={entry_value?.image}
                  alt={entry_value?.label}
                  height={60}
                  width={60}
                />
                <h2 className="ml-5">{entry_value?.value}</h2>
              </div>
              <div>
                <button className="bg-sky-400 rounded-full p-4 pt-2 pb-2 tracking-wide text-white  font-light hover:bg-black hover:text-white">
                  Calculate Premium
                </button>
              </div>
            </div>
            {/*  Map through all input number fileds--- */}
            <div className="flex  flex-row gap-5 mt-5">
              {inputFields.map((field) => (
                <div className="flex flex-row" key={field.value}>
                  <h2>{field.label} : </h2>
                  <InputNumber
                    //  formatter={(value) => {
                    //   return field.label === "NCB" ? `${value} %` : "";
                    // }}
                    id={`${entry_value}-${field.value}`}
                    prefix={field.label !== "NCB" ? "₹" : "%"}
                    className="w-[100px] ml-5"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-row mt-5">
              <h2>Coverage : </h2>
              <Select
                mode="multiple"
                allowClear
                className="ml-5 w-[85%] "
                placeholder="Select Coverage"
                onChange={(value) => handleChange(value, index)}
                options={options}
              />
            </div>
            {/* COMMON COVERAGE AMOUNT HEADER */}
            <h2 className=" text-lg font-semibold mt-2 border-b-[1px]">
              Coverage Amount
            </h2>

            {/* Render selected coverage inputs */}
            {listCoverage[index] &&
              listCoverage[index].map((entry_, subIndex) => (
                <div
                  className="flex flex-row justify-between ml-0 m-2 mt-3 w-[400px] "
                  key={subIndex}
                >
                  <h3>{entry_} :</h3>
                  <InputNumber
                    id={`${entry_value}-${entry_}-${subIndex}`}
                    prefix="₹"
                  />
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Quotations;
