import React from "react";
import { useSelector } from "react-redux";
import { Disclosure } from '@headlessui/react'
function CheckoutCart() {
    const data = useSelector((state) => state.cardReducer.cardProduct);
  return (
    <div className="bg-[#F5F7FF] p-3 my-5">
      <p className="text-xl font-semibold">Order Summary</p>
      <div className="line w-full border my-3"> </div>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg b px-4 py-2 text-left text-sm font-medium ">
              <span>{data.length} Items in Cart</span>
              <div className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M6 9L8 7L10 9"
                    stroke="black"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className=" pt-4 pb-2 text-sm ">
              {
                data.map(item=>(
                    <div key={item.id} className="py-5 flex">
                     <img src={item.photo} alt=""  className="md:w-[62px] h-[62px]"/>
                     <div>
                        <p>{item.text}</p>
                        <div>
                            <span className="text-[#A2A6B0] ">Qty {item.quality}</span>
                            <span className="font-semibold pl-2">${item.quality*item.nowPrice}</span>
                        </div>
                     </div>
                    </div>
                ))
              }
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default CheckoutCart;
