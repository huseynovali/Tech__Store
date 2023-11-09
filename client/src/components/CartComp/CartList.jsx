import React from "react";
import { useSelector } from "react-redux";

function CartList() {
  const data = useSelector((state) => state.cardReducer.cardProduct);

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="flex">
            <img src={item.photo} alt="" />
            {item.text}
          </td>
          <td className="px-12">
            {item.nowPrice}
          </td>
          <td className="px-12">
            {item.quality}
          </td>
          <td className="px-12">1961</td>
        </tr>
      ))}
    </tbody>
  );
}

export default CartList;
