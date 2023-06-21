import React, { useState } from "react";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const SelectCompany = ({ checkedList, setCheckedList, companies_list }) => {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  // For s single select---
  const onChange = (list) => {
    const selectedObjects = list.map((value) =>
      companies_list.find((option) => option.value === value)
    );
    setCheckedList(selectedObjects);
    setIndeterminate(!!list.length && list.length < companies_list.length);
    setCheckAll(list.length === companies_list.length);
  };
  // for allSelect in  a single click----
  const onCheckAllChange = (e) => {
    const selectedValues = e.target.checked
      ? companies_list.map((option) => option.value)
      : [];
    const selectedObjects = selectedValues.map((value) =>
      companies_list.find((option) => option.value === value)
    );
    setCheckedList(selectedObjects);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="w-[400px] h-[700px] bg-white shadow-xl rounded-xl justify-between  items-center p-2">
      <>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          className="text-xl border-b-[2px]"
        >
          Selected Companies
        </Checkbox>

        <CheckboxGroup
          options={companies_list.map((option) => ({
            label: (
              <div className="w-[180px] flex flex-row text-center items-center ">
                <img
                  src={option.image}
                  alt={option.label}
                  className="mt-2 w-20 h-10"
                />
                <span className="ml-2 text-lg">{option.label}</span>
              </div>
            ),
            value: option.value,
          }))}
          value={checkedList.map((item) => item.value)}
          onChange={onChange}
        />
      </>
    </div>
  );
};

export default SelectCompany;
