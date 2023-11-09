import React from "react";
import { useLocation } from "react-router";
import CartList from "./CartList";

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
      <div>
        <div className="left w-[70%]">
          <table className="table-fixed text-left mt-7">
            <thead>
              <tr>
                <th>Item</th>
                <th className="px-12">Price</th>
                <th className="px-12">Qty</th>
                <th className="px-12">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <CartList />
            </tbody>
            <div className="w-full">
              <div className="w-[200%] h-[1px] bg-[#CACDD8]  block my-6 "></div>

              <div className="flex justify-between items-center w-[200%]">
                <div className="flex items-center w-[50%]">
                  <button className="px-7 py-2 border-2 border-[#A2A6B0] rounded-[50px] text-sm">
                    Continue Shopping
                  </button>
                  <button className="px-7 py-2 border-2  rounded-[50px] text-sm bg-black text-white ml-3">
                    Clear Shopping Cart
                  </button>
                </div>
                <button className="px-7 py-2 border-2  rounded-[50px] text-sm bg-black text-white ml-3">
                  Update Shopping Cart
                </button>
              </div>
            </div>
          </table>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default CartComp;
