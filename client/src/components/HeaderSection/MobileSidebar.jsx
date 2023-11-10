import React from "react";
import classNames from "classnames";
import Button from "../Buttons/Button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function MobileSidebar({ isOpenSidebar, setIsOpenSidebar }) {
  return (
    <Transition appear show={isOpenSidebar} as={Fragment}>
      <Dialog as="div" onClose={() => setIsOpenSidebar(!isOpenSidebar)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="w-0 opacity-0"
          enterTo="w-[250px] opacity-1"
          leave="ease-in duration-200"
          leaveFrom="w-[250px] opacity-1"
          leaveTo="w-0 opacity-0"
        >
          <div className="fixed inset-0 bg-white p-5 z-50">
            <div className="header flex items-center justify-between  border-b-2 pb-5 ">
              <div className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="34"
                  viewBox="0 0 29 34"
                  fill="none"
                >
                  <path
                    d="M14.1101 0.52002L0.130463 8.71339V18.7975L14.1101 26.9909L25.3245 20.6883V23.6821L14.1101 30.2998L0.130463 21.9488V25.5728L14.1101 33.6086L28.0898 25.5728V15.4887L16.8753 21.9488V18.7975L28.0898 12.1798V8.71339L14.1101 0.52002Z"
                    fill="#0156FF"
                  />
                </svg>
              </div>
              <button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M1.80585 1L13.7258 12.9199"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.7258 1L1.80585 12.9199"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mobile__sidebar__links py-2">
              <ul>
                <li className="py-1 px-1">
                  <a
                    href="#"
                    className="flex justify-between items-center align-middle text-xs"
                  >
                    <span className="-translate-y-0.5">Laptops</span>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1 px-1">
                  <a
                    href="#"
                    className="flex justify-between items-center align-middle text-xs"
                  >
                    <span className="-translate-y-0.5">Desktop PCs</span>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1 px-1">
                  <a
                    href="#"
                    className="flex justify-between items-center align-middle text-xs"
                  >
                    <span className="-translate-y-0.5">Networking Devices</span>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1 px-1">
                  <a
                    href="#"
                    className="flex justify-between items-center align-middle text-xs"
                  >
                    <span className="-translate-y-0.5">
                      Printers & Scanners
                    </span>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1 px-1">
                  <a
                    href="#"
                    className="flex justify-between items-center align-middle text-xs"
                  >
                    <span className="-translate-y-0.5">PC Parts</span>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1 px-1">
                  <a
                    href="#"
                    className="flex justify-between items-center align-middle text-xs"
                  >
                    <span className="-translate-y-0.5">All Other Products</span>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1 px-1">
                  <a
                    href="#"
                    className="flex justify-between items-center align-middle text-xs"
                  >
                    <span className="-translate-y-0.5">Repairs</span>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>

              <Button className=" text-[#0156FF] border-2 text-xs border-[#0156FF] py-2 px-12 rounded-[50px] hover:bg-[#0156FF] hover:text-white transition-colors mt-3">
                Our Deals
              </Button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default MobileSidebar;
