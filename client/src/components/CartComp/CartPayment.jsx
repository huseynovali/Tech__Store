import React from "react";
import { Disclosure } from "@headlessui/react";

function CartPayment() {
  return (
    <div>
      <p className="text-lg md:text-2xl font-semibold  md:py-4 ">Summary</p>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" w-full  text-left flex ">
              <div>
                <p className="pb-2">Estimate Shipping and Tax</p>
                <p className="text-[#666] text-sm">
                  Enter your destination to get a shipping estimate.
                </p>
              </div>
              <div className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M6 9.20209L8 7.20209L10 9.20209"
                    stroke="black"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" w-full  text-left flex py-5 justify-between">
              <div>
                <p className="pb-2">Apply Discount Code</p>
              </div>
              <div className={`${open ? "rotate-180 transform" : ""} h-5 w-5 transition-transform`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M6 9.20209L8 7.20209L10 9.20209"
                    stroke="black"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default CartPayment;
