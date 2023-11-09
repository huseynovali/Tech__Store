import React from "react";
import { useSelector } from "react-redux";

function CartList() {
  const data = useSelector((state) => state.cardReducer.cardProduct);

  return (
    <>
      {data.map((item) => (
        <>
          <tr
            key={item.id}
            className=" md:border-b md:my-5 w-full hidden md:table-row"
          >
            <td className="flex pr-7 py-5" colSpan={3}>
              <img
                src={item.photo}
                alt=""
                className="w-[68px] h-[68px] md:w-[120px] md:h-[120px] shrink-0"
              />
              {item.text}
            </td>
            <td className="md:px-12  py-5  align-top">{item.nowPrice}</td>
            <td className="md:px-12 px-4 py-5 align-top">{item.quality}</td>
            <td className="md:px-12 px-4 py-5 align-top">1961</td>
            <td className="md:px-12  py-5 align-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <circle
                  cx="13.4882"
                  cy="13.4883"
                  r="12.4882"
                  fill="white"
                  stroke="#CACDD8"
                  stroke-width="2"
                />
                <path
                  d="M9.44177 9.44183L18.2091 18.2092"
                  stroke="#A2A6B0"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M18.2091 9.44183L9.44178 18.2092"
                  stroke="#A2A6B0"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr key={item.id} className="  w-full  md:hidden">
            <td>
              <img
                src={item.photo}
                alt=""
                className="w-[68px] h-[68px] md:w-[120px] md:h-[120px] shrink-0"
              />
            </td>
            <td className=" pr-7 py-5" colSpan={3}>
              {item.text}
            </td>
          </tr>

          <tr className="  w-full  md:hidden">
            <th className="md:px-12 py-2">Price</th>
            <th className="md:px-12 px-4 py-2">Qty</th>
            <th className="md:px-12 px-4 py-2">Subtotal</th>
            <th></th>
            <th></th>
          </tr>

          <tr className="border-b my-5  w-full  md:hidden">
            <td className="md:px-12  py-5  align-top">{item.nowPrice}</td>
            <td className="md:px-12 px-4 py-5 align-top">{item.quality}</td>
            <td className="md:px-12 px-4 py-5 align-top">1961</td>
            <td className="md:px-12  py-5 align-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <circle
                  cx="13.4882"
                  cy="13.4883"
                  r="12.4882"
                  fill="white"
                  stroke="#CACDD8"
                  stroke-width="2"
                />
                <path
                  d="M9.44177 9.44183L18.2091 18.2092"
                  stroke="#A2A6B0"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M18.2091 9.44183L9.44178 18.2092"
                  stroke="#A2A6B0"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </td>
          </tr>
        </>
      ))}
    </>
  );
}

export default CartList;
