import React, { useState } from "react";
import "./App.css";
import SelectCompany from "./components/SelectCompany";
import Quotations from "./components/Quotations";

function App() {
  const [checkedList, setCheckedList] = useState([]);

  // fake data options---
  const options = [
    {
      label: "Third Party Liability only Cover",
      value: "Third Party Liability only Cover",
    },
    { label: "Collision Damage", value: "Collision Damage" },
    { label: "Own Damage", value: "Own Damage" },
  ];
  // inputFields
  const inputFields = [
    { label: "Premium", value: "premium" },
    { label: "Sum Insured", value: "sumInsured" },
    { label: "NCB", value: "ncb" },
  ];

  // DUMMY COMPANIES LIST---
  const companies_list = [
    {
      label: "LIC",
      value: "LIC",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Life_Insurance_Corporation_of_India_%28logo%29.svg/250px-Life_Insurance_Corporation_of_India_%28logo%29.svg.png",
    },
    {
      label: "HDFC",
      value: "HDFC",
      image:
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/2/w900X450/HDFC.jpg?w=400&dpr=2.6",
    },
    {
      label: "SBI",
      value: "SBI",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT-Ek3ziGMgGBcaoAKvmgkgXa7pb4UxT4MZa9TninL868HVbnnsgH0HM5DuaWbOx-M8w&usqp=CAU",
    },
    {
      label: "ICICI",
      value: "ICICI",
      image:
        "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/06/11133200/cancel-icici-bank-credit-card.jpg",
    },
  ];
  return (
    <div className="flex flex-row p-10 gap-5">
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
      />
    </div>
  );
}

export default App;
