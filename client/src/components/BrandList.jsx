import React from "react";
import { compCategory } from "../utils/const";

function BrandList() {
  return (
    <div className="flex flex-wrap justify-between">
      {compCategory.map((item) => (
        <div key={item.title} className="px-3 py-5 cursor-pointer hover:bg-[#F5F7FF]">
          <img src={item.photo} alt=""  className="w-[150px]"/>
        </div>
      ))}
    </div>
  );
}

export default BrandList;
