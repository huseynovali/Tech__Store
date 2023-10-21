import React from "react";
import Button from "../Buttons/Button";
import { Disclosure } from "@headlessui/react";
import { footerData } from "../../utils/const";

function MobileFooter() {
  return (
    <div>
      <div
        className=" flex   flex-col py-9 px-3
      "
      >
        <div className="left text-center pb-4">
          <p className="text-lg text-white pb-2">Sign Up To Our Newsletter.</p>
          <p className="text-xs text-white font-light">
            Be the first to hear about the latest offers.
          </p>
        </div>
        <div className="right flex">
          <input
            type="text"
            className="border-2 w-full mr-6 rounded-[4px] bg-transparent px-2 placeholder:text-white"
            placeholder="Your Email"
          />
          <Button className="text-sm bg-[#0156FF] rounded-[50px] px-7 py-3 text-white font-semibold">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-2xl  p-2">
          <div className="border-b-2  border-opacity-50 border-[#fff] pb-2 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg   py-2 text-white text-xs font-medium ">
                    <span>Information</span>
                    <div className={`${open ? "rotate-180 transform" : ""} `}>
                      <svg
                        width="6"
                        height="5"
                        viewBox="0 0 6 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1.76923L3 3.76923L1 1.76923"
                          stroke="#E5ECF1"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      {footerData.Information.map((item) => (
                        <li>{item.title}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="border-b-2  border-opacity-50 border-[#fff] pb-2 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg   py-2 text-white text-xs font-medium ">
                    <span>PC Parts</span>
                    <div className={`${open ? "rotate-180 transform" : ""} `}>
                      <svg
                        width="6"
                        height="5"
                        viewBox="0 0 6 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1.76923L3 3.76923L1 1.76923"
                          stroke="#E5ECF1"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      {footerData.PC_Parts.map((item) => (
                        <li>{item.title}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="border-b-2  border-opacity-50 border-[#fff] pb-2 mb-5">
            <Disclosure className="border-b-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg   py-2 text-white text-xs font-medium ">
                    <span>Desktop PCs</span>
                    <div className={`${open ? "rotate-180 transform" : ""} `}>
                      <svg
                        width="6"
                        height="5"
                        viewBox="0 0 6 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1.76923L3 3.76923L1 1.76923"
                          stroke="#E5ECF1"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
                    <ul>
                      {footerData.Desktop_PCs.map((item) => (
                        <li>{item.title}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="border-b-2  border-opacity-50 border-[#fff] pb-2 mb-5">
            <Disclosure className="border-b-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg   py-2 text-white text-xs font-medium ">
                    <span>Laptops</span>
                    <div className={`${open ? "rotate-180 transform" : ""} `}>
                      <svg
                        width="6"
                        height="5"
                        viewBox="0 0 6 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1.76923L3 3.76923L1 1.76923"
                          stroke="#E5ECF1"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
                    <ul>
                      {footerData.Laptops.map((item) => (
                        <li>{item.title}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
