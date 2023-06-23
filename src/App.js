import React, { useState } from "react";
import "./App.css";
import ListLeads from "./components/ListLeads";
import LeadDetails from "./components/LeadDetails";
import CreateQuotations from "./components/CreateQuotations";
import { companies_list, inputFields, options } from "../src/fakeData/data";
import QuotationsPreview from "./components/QuotationsPreview";

function App() {
  const [checkedList, setCheckedList] = useState([]);
  const [quotation, setQuotation] = useState([]);
  const [selectedLead, setSelectedLead] = useState([]);
  const [condition, setCondition] = useState("listleads");
  const changeCondition = (newCondition) => {
    setCondition(newCondition);
  };

  const renderConditionally = () => {
    switch (condition) {
      case "listleads":
        return (
          <ListLeads
            changeCondition={changeCondition}
            setSelectedLead={setSelectedLead}
          />
        );
      case "leadDetails":
        return (
          <LeadDetails
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            companies_list={companies_list}
            changeCondition={changeCondition}
            selectedLead={selectedLead}
            condition={condition}
          />
        );
      case "createquotations":
        return (
          <CreateQuotations
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            companies_list={companies_list}
            options={options}
            inputFields={inputFields}
            quotation={quotation}
            setQuotation={setQuotation}
            condition={condition}
            changeCondition={changeCondition}
          />
        );
      case "quatationpreview":
        return (
          <QuotationsPreview
            checkedList={checkedList}
            setCheckedList={setCheckedList}
            companies_list={companies_list}
            options={options}
            inputFields={inputFields}
            quotation={quotation}
            setQuotation={setQuotation}
            condition={condition}
            changeCondition={changeCondition}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Replace this with original Nav component--- */}
      <div className="bg-white h-[100px] w-full text-center items-center justify-center text-lg shadow-md">
        Replace with Main Navbar---
      </div>
      {renderConditionally()}
    </>
  );
}

export default App;
