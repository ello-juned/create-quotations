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
    <div className="w-[350px] h-[600px] bg-white shadow-lg rounded-lg justify-between  items-center p-0">
      <>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          className="text-xl border-b-[1px]"
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
          value={checkedList}
          onChange={onChange}
        />
      </>
    </div>
  );
};

export default SelectCompany;
