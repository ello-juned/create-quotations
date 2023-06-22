import React, { useState } from "react";
import { Typography } from "antd";
import LeadDetailsHeader from "./LeadDetailsHeader";
import {
  FilePdfOutlined,
  ShareAltOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import QuatationPreviewCard from "./QuatationPreviewCard";
// import logo from 'public/logo.png'

const { Paragraph } = Typography;

const QuotationsPreview = ({
  checkedList,
  setCheckedList,
  companies_list,
  quotation,
  setQuotation,
}) => {
  // Current Date---
  function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = currentDate.getFullYear();
    const formattedDate = day + "-" + month + "-" + year;
    return formattedDate;
  }
  const date = getCurrentDate();

  // dummy texts---
  const insuranceMessage =
    "Thank you for your interest in Ell insurance. In regard to your query, we are delighted to make you the following offers. You can directly buy any policy by simply clicking on the BUY NOW link or you can contact us at ello.insurance@gmail.com.";
  const insuranceNote =
    "Please let us know if u require anyy further information. Please note that Early Bird Discount is a  limited time offer and will only be available until we look forward to hearing from u ";
  const [editableHello, setEditableHello] = useState("Hello, Ellocent Labs");
  const [editableRegards, setEditableRegards] = useState(
    "Kind Reagards  Mahaveer Ell Insurance"
  );

  const [editableInsuranceMessage, setEditableInsuranceMessage] =
    useState(insuranceMessage);

  const [editableInsuranceNote, setEditableInsuranceNote] =
    useState(insuranceNote);
  return (
    <div className=" flex flex-col gap-4 w-full h-full p-8">
      {/* Common  LeadDetailsHeader */}
      <LeadDetailsHeader />
      {/*  QuotationsPreview Header---*/}
      <div className=" flex flex-col bg-white min-h-[600px] h-full w-[80%] m-auto mt-2  p-5  rounded-xl shadow-lg">
        <div className=" flex flex-row justify-between items-center border-b-2  pt-2 pb-2">
          <div>
            <h2 className="text-lg">Quotation For Motor Insurance</h2>
          </div>
          <div className="flex flex-row gap-5 text-2xl cursor-pointer">
            <FilePdfOutlined />
            <ShareAltOutlined />
            <PrinterOutlined />
          </div>
        </div>
        <div className="flex flex-col  gap-2">
          <div className="w-full text-center ">
            {/* REPLACE BY COMPANY LOGO */}
            <img
              src="https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg"
              alt="logo"
              height={80}
              width={80}
              className="m-auto"
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <Paragraph editable={{ onChange: setEditableHello }}>
              {editableHello}
            </Paragraph>{" "}
            <span> Date : {date} </span>
          </div>
          <div className="w-[90%]">
            <Paragraph
              editable={{
                onChange: setEditableInsuranceMessage,
                text: editableInsuranceMessage,
              }}
            >
              {editableInsuranceMessage}
            </Paragraph>
          </div>
          <QuatationPreviewCard
            quotation={quotation}
            setQuotation={setQuotation}
          />

          <div className="w-[90%]">
            <Paragraph
              editable={{
                onChange: setEditableInsuranceNote,
                text: editableInsuranceNote,
              }}
            >
              {editableInsuranceNote}
            </Paragraph>
          </div>
          <div className="flex flex-row justify-between items-center">
            <Paragraph
              className=" h-full w-[130px]"
              editable={{ onChange: setEditableRegards, text: editableRegards }}
            >
              {editableRegards}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationsPreview;
