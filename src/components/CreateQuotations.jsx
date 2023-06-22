import React from "react";
import SelectCompany from "./SelectCompany";
import Quotations from "./Quotations";
import LeadDetailsHeader from "./LeadDetailsHeader";

const CreateQuotations = ({
  checkedList,
  setCheckedList,
  companies_list,
  options,
  inputFields,
  quotation,
  setQuotation,
}) => {
  return (
    <div className=" flex flex-col gap-4 w-full h-full p-8">
      <LeadDetailsHeader />
      <div className="flex flex-row gap-8 mt-2">
        <SelectCompany
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          companies_list={companies_list}
        />
        <Quotations
          options={options}
          inputFields={inputFields}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          quotation={quotation}
          setQuotation={setQuotation}
        />
      </div>
    </div>
  );
};

export default CreateQuotations;
