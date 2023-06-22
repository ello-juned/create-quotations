import React from "react";

const QuatationPreviewCard = ({ quotation, setQuotation }) => {
  console.log(quotation);
  return (
    <div className="flex flex-col ">
      <h2>Quotation</h2>
      <div className=" rounded-lg w-full flex flex-col  ">
        {Object.keys(quotation).map((label) => (
          <div
            key={label}
            className="border border-gray-300  rounded-md  flex flex-col  m-2 p-2 "
          >
            <div className="">
              {Object.keys(quotation[label]).map((value) => (
                <div
                  key={value}
                  className="mt-4 flex flex-row justify-between   text-justify"
                >
                  <div className="flex  flex-col  w-[10%]  h-full ">
                    <h2 className="border-b-2">Company</h2>
                    <p className="font-semibold "> {value}</p>
                  </div>
                  <div className="flex flex-row  w-[30%]">
                    {Object.keys(quotation[label][value].inputs).map(
                      (input) => {
                        return (
                          <>
                            <div className="flex flex-row  mt-0 m-auto ">
                              <div
                                key={input}
                                className="  flex  flex-col text-black"
                              >
                                <h2 className="flex flex-row border-b-2">
                                  {input}
                                </h2>
                                <p className="flex flex-row">
                                  {`${input !== "NCB" ? " ₹ " : ""}` +
                                    quotation[label][value].inputs[input]}
                                  {input === "NCB" ? " %" : ""}
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      }
                    )}
                  </div>

                  {/* </div> */}

                  <div className="flex flex-col  w-[45%] ">
                    <div className="flex flex-row justify-between  border-b-2  ">
                      <p className="font-medium  ">Coverage</p>
                      <p className="font-medium  ">Coverage Amount</p>
                    </div>
                    <div className="list-disc list-inside pl-4">
                      {Object.keys(quotation[label][value].coverage).map(
                        (entry) => (
                          <div
                            key={entry}
                            className="text-black  flex  flex-row justify-between "
                          >
                            <h2>{entry}</h2>
                            <p>
                              {"₹ " + quotation[label][value].coverage[entry]}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className=" flex flex-row justify-center m-auto h-full w-[10%]">
                    <button className="bg-sky-400 m-auto  p-2 rounded-lg text-white text-sm">
                      BUY NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default QuatationPreviewCard;
