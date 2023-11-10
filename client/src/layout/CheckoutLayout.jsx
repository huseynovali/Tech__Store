import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

function CheckoutLayout() {
  const location = useLocation();

  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);
  return (
    <div className="">
      <div className="left w-[70%]">
        <p className="capitalize">{url}</p>
        <div className="flex items-center ">
          <p className="text-lg md:text-4xl font-semibold py-2 md:py-4 align-middle">
            Checkout
          </p>
          <Link
            to={"/home/login"}
            className="px-20 py-3 rounded-[50px] border-2 border-[#0156FF] text-[#0156FF] font-semibold ml-3 mt-2 hover:bg-[#0156FF] hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </div>
        <Outlet />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default CheckoutLayout;
