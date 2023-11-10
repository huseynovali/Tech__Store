import React, { useState } from "react";
import { useSelector } from "react-redux";

function CartList() {
  const data = useSelector((state) => state.cardReducer.cardProduct);
  const [compCound, setCompCound] = useState(1);
  const handleInputChange = (e) => {
    setCompCound(e.target.value);
  };
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={`visible-${item.id}-1`}>
          <tr className=" md:border-b md:my-5 w-full hidden md:table-row">
            <td className="flex pr-7 py-5" colSpan={3}>
              <img
                src={item.photo}
                alt=""
                className="w-[68px] h-[68px] md:w-[120px] md:h-[120px] shrink-0"
              />
              {item.text}
            </td>
            <td className="md:px-12  py-5  align-top">{item.nowPrice}</td>
            <td className="md:px-12 px-4 py-5 align-top">
              <div className="number__input__group relative ml-2">
                <input
                  type="number"
                  min={0}
                  // change real data
                  value={item.quality}
                  onChange={handleInputChange}
                  className="border-none outline-none bg-[#F5F7FF] w-[70px] h-[50px] py-2 px-3 "
                />
                <div className="buttons__number__input  absolute right-0 top-0 max-w-min h-full">
                  <div className="top__btn z-10 h-1/2 flex items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 9L8 7L10 9"
                        stroke="#A2A6B0"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="bottom__btn z-10 h-1/2 flex items-start cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10 7L8 9L6 7"
                        stroke="#A2A6B0"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </td>
            <td className="md:px-12 px-4 py-5 align-top">
              {item.quality * item.nowPrice}
            </td>
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
                  strokeWidth="2"
                />
                <path
                  d="M9.44177 9.44183L18.2091 18.2092"
                  stroke="#A2A6B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18.2091 9.44183L9.44178 18.2092"
                  stroke="#A2A6B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>

          <tr className="  w-full  md:hidden">
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

          <tr className="w-full  md:hidden">
            <th className="md:px-12 py-2">Price</th>
            <th className="md:px-12 px-4 py-2">Qty</th>
            <th className="md:px-12 px-4 py-2">Subtotal</th>
            <th></th>
            <th></th>
          </tr>

          <tr className="border-b my-5  w-full  md:hidden">
            <td className="md:px-12  py-5  align-top">{item.nowPrice}</td>
            <td className="md:px-12 px-4 py-5 align-top">
              <div className="number__input__group relative ml-2">
                <input
                  type="number"
                  min={0}
                  // change real data
                  value={item.quality}
                  onChange={handleInputChange}
                  className="border-none outline-none bg-[#F5F7FF] w-[70px] h-[50px] py-2 px-3 "
                />
                <div className="buttons__number__input  absolute right-0 top-0 max-w-min h-full">
                  <div className="top__btn z-10 h-1/2 flex items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 9L8 7L10 9"
                        stroke="#A2A6B0"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="bottom__btn z-10 h-1/2 flex items-start cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10 7L8 9L6 7"
                        stroke="#A2A6B0"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </td>
            <td className="md:px-12 px-4 py-5 align-top">
              {" "}
              {item.quality * item.nowPrice}
            </td>
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
                  strokeWidth="2"
                />
                <path
                  d="M9.44177 9.44183L18.2091 18.2092"
                  stroke="#A2A6B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18.2091 9.44183L9.44178 18.2092"
                  stroke="#A2A6B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </td>
          </tr>
        </React.Fragment>
      ))}
    </>
  );
}

export default CartList;
