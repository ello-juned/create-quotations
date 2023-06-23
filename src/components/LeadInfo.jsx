import React from "react";

const LeadInfo = ({ leadInfo }) => {
  // console.log("leadInfo", leadInfo);
  if (typeof leadInfo !== "object" || Array?.isArray(leadInfo)) {
    return null; // or return an appropriate message or UI for non-object data
  }
  return (
    <div className="min-h-[400px] h-full w-full bg-white shadow-xl rounded-xl tracking-wide truncate">
      <div className="container mx-auto p-4">
        <>
          <div className="text-lg font-normal mb-2 pb-2 text-sky-300 tracking-wide border-b-2">
            Basic Information
          </div>
          <div className=" w-full flex flex-row flex-wrap gap-3 ">
            {Object?.entries(leadInfo["Basic Information"])?.map(
              ([key, value]) => (
                <div className="flex flex-col mb-2   w-[24%] truncate" key={key}>
                  <div className="text-gray-500">{key}</div>
                  <div>{value}</div>
                </div>
              )
            )}
          </div>
        </>
        <>
          <div className="text-lg font-normal mt-2 mb-2 pb-2 text-sky-300 tracking-wide border-b-2">
            Insured Information
          </div>
          {leadInfo["Insured Information"]?.map((insuredData, index) => (
            <div className=" w-full flex flex-row flex-wrap gap-3  " key={index}>
              {Object.entries(insuredData).map(([key, value]) => (
                <div className="flex flex-col mb-2   w-[25%]" key={key}>
                  <div className="w-48 text-gray-500">{key}</div>
                  <div>{value || "--"}</div>
                </div>
              ))}
            </div>
          ))}
        </>

        {leadInfo?.Remarks && (
          <>
            <div className="text-lg font-normal mb-2 pb-2 text-sky-300 tracking-wide border-b-2">
              Remarks
            </div>
            <div className="flex mb-2">
              <div className="w-48 text-gray-500">Remark</div>
              <div>{leadInfo?.Remarks?.Remark}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadInfo;
