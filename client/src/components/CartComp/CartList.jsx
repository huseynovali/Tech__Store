import React from "react";
import { useSelector } from "react-redux";

function CartList() {
  const data = useSelector((state) => state.cardReducer.cardProduct);

  return (
    <tbody >
      {data.map((item) => (
        <tr key={item.id} className="border-l-r-b-none border-t border-[#CACDD8] mt-6 pt-6 ">
          <td className="flex pr-7">
            <img src={item.photo} alt="" width={120} height={120}/>
            {item.text}
          </td>
          <td className="px-12 align-top">
            {item.nowPrice}
          </td>
          <td className="px-12 align-top">
            {item.quality}
          </td>
          <td className="px-12 align-top">1961</td>
        </tr>
      ))}
    </tbody>
  );
}

export default CartList;
