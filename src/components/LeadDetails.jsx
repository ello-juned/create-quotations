import React from "react";
import LeadDetailsHeader from "./LeadDetailsHeader";
import LeadInfo from "./LeadInfo";
import ProceedLeadInfo from "./ProceedLeadInfo";

const LeadDetails = ({ checkedList, setCheckedList, companies_list,changeCondition,selectedLead }) => {

  return (
    <div className=" flex flex-col gap-4 w-full h-full p-8">
      <LeadDetailsHeader />
      <div className="flex flex-row gap-8 mt-2">
        <LeadInfo leadInfo={selectedLead} />
        <ProceedLeadInfo
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          companies_list={companies_list}
          changeCondition={changeCondition}
        />
      </div>
    </div>
  );
};

export default LeadDetails;
