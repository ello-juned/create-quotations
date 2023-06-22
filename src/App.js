import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListLeads from "./components/ListLeads";
import LeadDetails from "./components/LeadDetails";
import CreateQuotations from "./components/CreateQuotations";
import { companies_list, inputFields, options } from "../src/fakeData/data";
import QuotationsPreview from "./components/QuotationsPreview";

function App() {
  const [checkedList, setCheckedList] = useState([]);
  const [quotation, setQuotation] = useState([]);
  return (
    <>
      {/* Replace this with original Nav component--- */}
      <div className="bg-white h-[100px] w-full text-center items-center justify-center text-lg shadow-md">
        Replace with Main Navbar---
      </div>

      <Routes>
        <Route path="*" element={<div>Page Not Found!!!</div>} />

        <Route path="/" element={<ListLeads />} />

        <Route
          path="/LeadDetails"
          element={
            <LeadDetails
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              companies_list={companies_list}
            />
          }
        />
        <Route
          path="/CreateQuotation"
          element={
            <CreateQuotations
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              companies_list={companies_list}
              options={options}
              inputFields={inputFields}
              quotation={quotation}
               setQuotation={setQuotation}
            />
          }
        />
        <Route
          path="/QuotationsPreview"
          element={
            <QuotationsPreview
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              companies_list={companies_list}
              quotation={quotation}
              setQuotation={setQuotation}
              // checkedList={checkedList}
              // setCheckedList={setCheckedList}
              // companies_list={companies_list}
              // options={options}
              // inputFields={inputFields}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
