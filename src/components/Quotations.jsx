import React, { useState } from "react";
import { InputNumber, Select } from "antd";
import { FileTwoTone } from "@ant-design/icons";

const Quotations = ({ options, inputFields, checkedList, setCheckedList }) => {
  const [listCoverage, setListCoverage] = useState([]);
  // console.log("checkedList", checkedList);
  const handleChange = (value, index) => {
    const updatedListCoverage = [...listCoverage];
    updatedListCoverage[index] = value;
    setListCoverage(updatedListCoverage);
  };

  // this function will  be trigger after submit the form----
  // please check console for output---
  const handleCalculatePremium = () => {
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
      premiums[entry_value] = {
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
    // EITHER WE CAN STORE IN A STATE---
    console.log(premiums);
  };

  return (
    <div className="flex flex-col w-full h-full min-h-[400px] bg-white  shadow-xl rounded-lg p-4">
      {/* HEADER */}
      <div className="flex flex-row items-center justify-between border-b-[1px]">
        <div className="w-[20%]">
          <h2 className="text-2xl">Create Quotation</h2>
          {/*   FOR LATER USE--- */}
          <div className="flex flex-row mb-1 mt-2">
            <button>Online</button>

            
            <button className="ml-5">Offline</button>
          </div>
        </div>
        <div>
          <button className="bg-green-300 p-2 flex flex-row justify-center items-center text-center tracking-wider font-light  text-white rounded-md hover:bg-gray-600">
            PREVIEW <FileTwoTone className="text-2xl ml-2" />
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
                <button
                  onClick={handleCalculatePremium}
                  className="bg-black rounded-full p-3 tracking-wide text-white  font-light hover:bg-green-300 hover:text-black"
                >
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
                    id={`${entry_value}-${field.value}`}
                    prefix="₹"
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





// .ant-checkbox-checked:after {
//   @apply bg-green-300 p-2 border-transparent animate-none;
// }


// {
//   "Basic Information": {
//     "Insurance Category": "John Doe",
//     "Product Type": "2 Wheeler",
//     "Insurance Category": "John Doe",

//     "Primary Email Address": "johndoe@example.com",
//     "Contact Number": "1234567890"
//     "Presently Insured": "Yes"

//   },
//   "Insured Information": [
//     {
//       "Barnd": "Toyota",
//       "Model": "Camry",
//       "Variant": "Petrol",
//       "Vehicle": "Private",
//       "Fuel Type": "Petrol",
//       "Vehicle": "Old",
//       "Regn No": "Pb659099",
//       "Manufacture Year": "2022"
//     }
//   ],
//   "Remarks": {"Remark":"I like the product."}
// }