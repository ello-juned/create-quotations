import React from "react";

const QuatationPreviewCard = ({ quotation, setQuotation }) => {
  console.log(quotation);
  return (
    <div className="flex flex-col ">
      <h2 className="text-s">Quotation</h2>
      <div className=" rounded-lg w-full flex flex-col  ">
        {Object.keys(quotation).map((label) => (
          <div
            key={label}
            className="border-[2px] border-grey-40  rounded-md  flex flex-col mt-4 p-1"
          >
            <div className="">
              {Object.keys(quotation[label]).map((value) => (
                <div
                  key={value}
                  className=" p-2 flex flex-row justify-between   text-justify"
                >
                  <div className="flex  flex-col  w-[10%]  h-full">
                    <h2 className="border-b-[1px] border-grey-40 font-light  ">
                      Company
                    </h2>
                    <p className="font-light"> {value}</p>
                  </div>
                  <div className="flex flex-row w-[35%] ">
                    {Object.keys(quotation[label][value].inputs).map(
                      (input) => {
                        return (
                          <div
                            className="flex flex-row mt-0 m-auto w-full"
                            key={input}
                          >
                            <div className="flex flex-col text-black w-full">
                              <h2 className="flex flex-row border-b-[1px] border-grey-40  font-light   w-full">
                                {input}
                              </h2>
                              <p className="flex flex-row w-full font-light ">
                                {`${input !== "NCB" ? " ₹ " : ""}` +
                                  quotation[label][value].inputs[input]}
                                {input === "NCB" ? " %" : ""}
                              </p>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <div className="flex flex-col  w-[40%]  ">
                    <div className="flex flex-row justify-between  border-b-[1px] border-grey-40  ">
                      <p className=" font-light ">Coverage</p>
                      <p className="font-light">Coverage Amount</p>
                    </div>
                    <div className="">
                      {Object.keys(quotation[label][value].coverage).map(
                        (entry) => (
                          <div
                            key={entry}
                            className="text-black  flex  flex-row justify-between "
                          >
                            <h2 className="font-light pb-2">{entry}</h2>
                            <p className="text-left font-light">
                              {"₹ " + quotation[label][value].coverage[entry]}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className=" flex flex-col justify-between  h-full w-[15%]">
                    <span className="block  border-b-[1px] border-grey-40  text-transparent">
                      .
                    </span>
                    <button className="mt-8 ml-8  p-2 rounded-lg text-white bg-primary-60 text-xxs  w-[100px] ">
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
