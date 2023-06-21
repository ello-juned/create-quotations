import React from "react";
import { useLocation } from "react-router-dom";
import LeadDetailsHeader from "./LeadDetailsHeader";
import LeadInfo from "./LeadInfo";
import ProceedLeadInfo from "./ProceedLeadInfo";

const LeadDetails = ({ checkedList, setCheckedList, companies_list }) => {
  // Getting selected single lead from list---
  const location = useLocation();
  const leadInfo = location.state;
  return (
    <div className=" flex flex-col gap-4 w-full h-full p-8">
      <LeadDetailsHeader />
      <div className="flex flex-row gap-8 mt-2">
        <LeadInfo leadInfo={leadInfo} />
        <ProceedLeadInfo
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          companies_list={companies_list}
        />
      </div>
    </div>
  );
};

export default LeadDetails;
