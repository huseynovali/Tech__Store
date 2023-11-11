import React from "react";
import { Outlet, useLocation } from "react-router";
import CheckStep from "../components/CheckoutComp/CheckStep";
import CheckoutCart from "../components/CheckoutComp/CheckoutCart";

function CheckoutLayout() {
  const location = useLocation();

  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);
  return (
    <div className="md:flex">
      <div className="left md:w-[70%] py-3">
        <p className="capitalize">{url}</p>
        <div className="flex items-center ">
          <p className="text-lg md:text-4xl font-semibold py-2 md:py-4 align-middle">
            Checkout
          </p>
        </div>
        <Outlet />
      </div>
      <div className="right py-20 px-3 md:w-[30%]">
        <div className="hidden md:block">
          <CheckStep />
        </div>

        <CheckoutCart />
      </div>
    </div>
  );
}

export default CheckoutLayout;
