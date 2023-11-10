import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function CheckoutComp() {
  const location = useLocation();
  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);
  return (
    <div className="py-5">
      <div className="left">
        <p className="capitalize">{url}</p>
        <div className="flex items-center ">
          <p className="text-lg md:text-4xl font-semibold py-2 md:py-4 align-middle">
            Checkout
          </p>
          <Link className="px-16 py-3 rounded-[50px] border-2 border-[#0156FF] text-[#0156FF] font-semibold ml-3 mt-2 hover:bg-[#0156FF] hover:text-white transition-colors">
            Sign In
          </Link>
        </div>

        <div className="shoping__address pt-12">
          <p className="text-lg font-semibold">Shipping Address</p>
          <div className="w-full border mt-2 mb-10"></div>
          {/* FORM */}
          <div className="form w-[70%]">
            <div className="input__group">
              <label htmlFor="" className="block py-2">Email Address <span className="text-red-500">*</span></label>
              <input type="text" className="w-full py-2  border" />
            </div>
            <p className="text-sm text-[#666] py-4">
              You can create an account after checkout.
            </p>
            <div className="w-full border  mb-10"></div>
            <div className="input__group py-2">
              <label htmlFor="" className="block py-2">First Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full py-2  border" />
            </div>
            <div className="input__group py-2">
              <label htmlFor="" className="block py-2">Last Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full py-2  border" />
            </div>
            <div className="input__group py-2">
              <label htmlFor="" className="block py-2">Company <span className="text-red-500">*</span></label>
              <input type="text" className="w-full py-2  border" />
            </div>
            <div className="input__group py-2">
              <label htmlFor="" className="block py-2">Street Address <span className="text-red-500">*</span></label>
              <input type="text" className="w-full py-2  border" />
              <input type="text" className="w-full py-2  border mt-2" />
            </div>
            <div className="input__group py-2">
              <label htmlFor="" className="block py-2">City <span className="text-red-500">*</span></label>
              <input type="text" className="w-full py-2  border" />
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default CheckoutComp;
