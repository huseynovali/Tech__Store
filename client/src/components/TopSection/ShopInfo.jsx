import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

function ShopInfo() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`text-white border-0 outline-none flex items-center text-xs`}
          >
            <span className="text-[#A2A6B0] pr-1">Mon-Thu:</span> 9:00 AM - 5:30
            PM
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
              <path d="M10 5.76929L8 7.76929L6 5.76929" />
            </svg>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute  z-10 mt-3 w-screen max-w-[260px]  transform  bg-white ">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="We__are__open flex p-2">
                  <div>
                    <svg width="35" height="35" viewBox="0 0 35 38" fill="#fff">
                      <g filter="url(#filter0_d_121_49469)">
                        <path d="M17.5 28.85C11.2429 28.85 6.15 23.7571 6.15 17.5C6.15 11.2429 11.2429 6.15 17.5 6.15C23.7571 6.15 28.85 11.2429 28.85 17.5C28.85 23.7571 23.7571 28.85 17.5 28.85Z" />
                        <path d="M17.5 12.25V18.375H23.625" fill="#0156FF" />
                      </g>
                    </svg>
                  </div>
                  <div className="open__info__group p-1 text-xs">
                    <p>We are open:</p>
                    <p className="font-bold mt-1">
                      <span className="text-[#A2A6B0]">Mon-Thu: </span>9:00 AM -
                      5:30 PM
                    </p>
                    <p className="font-bold my-2">
                      <span className="text-[#A2A6B0]">Fr: </span>9:00 AM - 6:00
                      PM
                    </p>
                    <p className="font-bold">
                      <span className="text-[#A2A6B0]">Sat: </span> 11:00 AM -
                      5:00 PM
                    </p>
                  </div>
                </div>
                <div className="address p-2 border border-l-0 border-r-0 border-[#CACDD8] flex ">
                  <div>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 17C15.625 17 14.5 15.92 14.5 14.6C14.5 13.28 15.625 12.2 17 12.2C18.375 12.2 19.5 13.28 19.5 14.6C19.5 15.92 18.375 17 17 17ZM24.5 14.84C24.5 10.484 21.1875 7.4 17 7.4C12.8125 7.4 9.5 10.484 9.5 14.84C9.5 17.648 11.9375 21.368 17 25.808C22.0625 21.368 24.5 17.648 24.5 14.84ZM17 5C22.25 5 27 8.864 27 14.84C27 18.824 23.6625 23.54 17 29C10.3375 23.54 7 18.824 7 14.84C7 8.864 11.75 5 17 5Z"
                        fill="#0156FF"
                      />
                    </svg>
                  </div>
                  <p className="text-xs p-1">
                    Address: 1234 Street Adress, City Address, 1234
                  </p>
                </div>
                <div className="contact py-2 px-5">
                  <p>
                    Phones:{" "}
                    <a href="tel:+" className="text-[#0156FF]">
                      (00) 1234 5678
                    </a>
                  </p>
                  <p>
                    E-mail:{" "}
                    <a href="mailto:" className="text-[#0156FF]">
                      shop@email.com
                    </a>
                  </p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default ShopInfo;
