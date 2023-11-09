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
            <tfoot>
                <tr>
                    <td>
                        
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
          </table>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default CartComp;
