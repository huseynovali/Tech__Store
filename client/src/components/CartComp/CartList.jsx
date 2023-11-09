import React from "react";
import { useSelector } from "react-redux";

function CartList() {
  const data = useSelector((state) => state.cardReducer.cardProduct);

  return (
    <>
      {data.map((item) => (
        <>
          <div className="w-[200%] h-[1px] bg-[#CACDD8]  block my-6 "></div>
          <tr key={item.id}>
            <td className="flex pr-7">
              <img src={item.photo} alt="" width={120} height={120} />
              {item.text}
            </td>
            <td className="px-12 align-top">{item.nowPrice}</td>
            <td className="px-12 align-top">{item.quality}</td>
            <td className="px-12 align-top">1961</td>
          </tr>
        </>
      ))}
    </>
  );
}

export default CartList;
