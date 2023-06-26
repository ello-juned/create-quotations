import React from "react";
import List_Leads from "../fakeData/Leads.json";
const ListLeads = ({ changeCondition, setSelectedLead }) => {
  
  const handleClick = (lead) => {
    // Invoke the callback function to change the condition
    changeCondition("leadDetails");
    setSelectedLead(lead);
  };

  return (
    <div>
      {List_Leads.map((lead, index) => {
        return (
          <div key={index} className="flex flex-col m-auto w-[300px] h-full">
            <div className="flex flex-row justify-between p-2 m-2 bg-grey-50 shadow-custom rounded-sm">
              <h2 className="text-white">
                {lead["Basic Information"]["Insurance Category"]}
              </h2>
              <button
                className="bg-black w-20  p-1 text-white text-lg hover:bg-red rounded-lg"
                onClick={() => handleClick(lead)}
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
