import React from "react";
import List_Leads from "../fakeData/Leads.json";
import { useNavigate } from "react-router-dom";

const ListLeads = () => {
  const navigate = useNavigate();
  const handleViewClick = (selectedLead) => {
    navigate("/LeadDetails",{ state:selectedLead});
  };

  return (
    <div>
      {List_Leads.map((lead, index) => {
        return (
          <div key={index} className="flex flex-col m-auto w-[300px] h-full">
            <div className="flex flex-row justify-between p-2 m-2 bg-gray-300 shadow-md rounded-sm  ">
              <h2 className="text-black">{lead["Basic Information"]["Insurance Category"]}</h2>
              <button
                className="bg-black w-20  p-1 text-white text-lg hover:bg-red-200 rounded-lg"
                onClick={() => handleViewClick(lead)}
              >
                View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListLeads;
