import React from "react";
import Button from "../Buttons/Button";

function DicountCode() {
  return (
    <div>
      <label htmlFor="" className="text-sm font-semibold pb-2 block">
        Enter discount code
      </label>
      <input
        type="text"
        name=""
        id=""
        className="w-full p-3 border border-[#A2A6B0] rounded"
        placeholder="Enter discount code"
      />
      <Button className=" text-[#0156FF] border-2 border-[#0156FF] py-2 px-7 w-full mt-5 font-semibold rounded-[50px] hover:bg-[#0156FF] hover:text-white transition-colors">
        Apply Discount
      </Button>
    </div>
  );
}

export default DicountCode;
