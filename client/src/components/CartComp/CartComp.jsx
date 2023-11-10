import React from "react";
import { useLocation } from "react-router";
import CartList from "./CartList";
import CartPayment from "./CartPayment";

function CartComp() {
  const location = useLocation();
  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);

  return (
    <div className="py-5">
      <p className="capitalize">{url}</p>
      <p className="text-lg md:text-4xl font-semibold py-2 md:py-4 ">
        Shopping Cart
      </p>
      <div className="md:flex">
        <div className="left md:w-[65%] pr-5">
          <table className="table-fixed text-left mt-7">
            <thead className="hidden md:table-header-group">
              <tr className="border-b ">
                <th>Item</th>
                <th className="px-12 py-2">Price</th>
                <th className="px-12 py-2">Qty</th>
                <th className="px-12 py-2">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <CartList />
            </tbody>
  
          </table>
          <div className="md:flex md:justify-between md:items-center pt-5">
            <div className="items-center lg:w-[70%] hidden lg:flex">
              <button className="px-7 py-2 border-2 border-[#A2A6B0] rounded-[50px] text-sm">
                Continue Shopping
              </button>
              <button className="px-7 py-2 border-2  rounded-[50px] text-sm bg-black text-white ml-3">
                Clear Shopping Cart
              </button>
            </div>
            <div className="flex justify-center ">
              <button className="px-7 py-2 border-2  rounded-[50px] text-sm bg-black text-white md:ml-3 w-[80%] md:w-full m-auto">
                Update Shopping Cart
              </button>
            </div>
          </div>
        </div>
        <div className="right bg-[#F5F7FF] py-4 px-7 md:w-[35%]">
          <CartPayment />
        </div>
      </div>
    </div>
  );
}

export default CartComp;
