import React, { useState } from "react";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const SelectCompany = ({ checkedList, setCheckedList, companies_list }) => {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < companies_list.length);
    setCheckAll(list.length === companies_list.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(
      e.target.checked ? companies_list.map((option) => option.value) : []
    );
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="w-[350px] h-[600px] bg-white shadow-lg rounded-lg justify-center items-center">
      <>
        <Checkbox
        
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          className="text-xl border-b-[1px] p-1 ml-4"
        >
          Selected Companies
        </Checkbox>

        <CheckboxGroup
          className="flex flex-col justify-center text-center mt-2 ml-5"
          options={companies_list.map((option) => ({
            label: (
              <span className="flex justify-center items-center text-xl mt-2">
                <img
                  src={option.image}
                  alt={option.label}
                  style={{ marginRight: "8px", width: "40px", height: "20px" }}
                />
                {option.label}
              </span>
            ),
            value: option.value,
          }))}
          value={checkedList}
          onChange={onChange}
        />
      </>
    </div>
  );
};

export default SelectCompany;
