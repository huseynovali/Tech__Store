import React from "react";
import { useSelector } from "react-redux";

function CartList() {
  const data = useSelector((state) => state.cardReducer.cardProduct);

  return (
    <>
      {data.map((item) => (
        <tr key={item.id} className="border-b my-5 ">
          <td className="flex pr-7 py-5">
            <img src={item.photo} alt="" width={120} height={120}  className="shrink-0"/>
            {item.text}
          </td>
          <td className="px-12  py-5  align-top">{item.nowPrice}</td>
          <td className="px-12  py-5 align-top">{item.quality}</td>
          <td className="px-12  py-5 align-top">1961</td>
        </tr>
      ))}
    </>
  );
}

export default CartList;
