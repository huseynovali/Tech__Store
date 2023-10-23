import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function MobileAccoundPopover() {
  return (
    <div>
      <Popover className="relative z-50">
        {({ open }) => (
          <>
            <Popover.Button
              className={`text-white accound border-2 border-white w-[34px] h-[34px] rounded-full flex justify-center items-center outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4ZM10 11.5C13.315 11.5 16 12.8425 16 14.5V16H4V14.5C4 12.8425 6.685 11.5 10 11.5Z"
                  fill="white"
                />
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
              <Popover.Panel className="absolute  z-10  mt-1   transform  bg-white  right-[20%] border">
                <div className="p-8 min-w-max z-10">
                  <ul>
                    <li className="py-1 hover:text-[#0156FF]">
                      <Link>My Account</Link>
                    </li>
                    <li className="py-1 hover:text-[#0156FF]">
                      <Link>My Wish List (0)</Link>
                    </li>
                    <li className="py-1 hover:text-[#0156FF]">
                      <Link>Compare (0)</Link>
                    </li>
                    <li className="py-1 hover:text-[#0156FF]">
                      <Link>Create an Account</Link>
                    </li>
                    <li className="py-1 hover:text-[#0156FF]">
                      <Link>Sign In</Link>
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default MobileAccoundPopover;
