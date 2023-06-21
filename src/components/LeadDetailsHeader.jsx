import React from "react";
import { Select } from "antd";

const assingnData = ["Rahul", "Sharma", "Vinod", "Pratak"];
const myArray = ["DRAFTED", "DELETE", "EDIT"];

const LeadDetailsHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center text-justify ">
      <div>
        <h2 className="text-2xl"> Lead Details - 123</h2>
        <p> sales | Leads | Lead Detail</p>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div className="flex flex-row justify-center  items-center gap-2">
          <h2> Assign To : </h2>
          <Select
            defaultValue={assingnData[0]}
            style={{ width: 150, }}
            // onChange={}
            options={assingnData.map((entry_) => ({
              label: entry_,
              value: entry_,
            }))}
          />
        </div>
        <div className="flex flex-row justify-center  items-center gap-2">
          <Select
            defaultValue={myArray[0]}
            style={{ width: 120 }}
            // onChange={}
            options={myArray.map((entry_) => ({
              label: entry_,
              value: entry_,
            }))}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsHeader;
