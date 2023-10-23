import React from 'react'

function NestedLiElement() {
  return (
    <div className='z-[80] relative'>
               <ul>
                  <li className="py-2 px-7 group/ad relative">
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm font-semibold "
                    >
                      Everyday Use Notebooks
                      <svg
                        width="4"
                        height="7"
                        viewBox="0 0 4 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.845703 1L2.8457 3.13407L0.845704 5.26814"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                    <div className="dic w-[260px]  h-[355px] bg-white hidden group-hover/ad:block absolute -right-[75%] top-0 border-0 border-r-2 border-[#CACDD8]">
                      <ul>
                        <li className="py-2 px-7 group/ws relative">
                          <a
                            href="#"
                            className="flex items-center justify-between text-sm font-semibold w-full "
                          >
                            MSI Workstation Series
                            <svg
                              width="4"
                              height="7"
                              viewBox="0 0 4 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.845703 1L2.8457 3.13407L0.845704 5.26814"
                                stroke="black"
                                stroke-width="1.6"
                                stroke-linecap="round"
                              />
                            </svg>
                          </a>
                          <div className="w-[260px]  h-[355px] bg-white hidden group-hover/ws:block absolute -right-[101%] top-0 border-0 border-r-2 border-[#CACDD8]">
                            <ul>
                              <li className="py-2 px-7 ">
                                <a
                                  className="flex items-center justify-between text-sm font-semibold w-full "
                                  href=""
                                >
                                  MSI WS Series (12)
                                </a>
                              </li>
                              <li className="py-2 px-7 ">
                                <a
                                  className="flex items-center justify-between text-sm font-semibold w-full "
                                  href=""
                                >
                                  MSI WT Series (31)
                                </a>
                              </li>
                              <li className="py-2 px-7 ">
                                <a
                                  className="flex items-center justify-between text-sm font-semibold w-full "
                                  href=""
                                >
                                  MSI WE Series (7)
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li className="py-2 px-7 ">
                          <a
                            href="#"
                            className="flex items-center justify-between text-sm font-semibold w-full "
                          >
                            MSI Prestige Series
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="py-2 px-7 ">
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm font-semibold"
                    >
                      MSI Workstation Series
                      <svg
                        width="4"
                        height="7"
                        viewBox="0 0 4 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.845703 1L2.8457 3.13407L0.845704 5.26814"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="py-2 px-7 ">
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm font-semibold"
                    >
                      MSI Prestige Series
                    </a>
                  </li>
                  <li className="py-2 px-7 ">
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm font-semibold"
                    >
                      Gaming Notebooks
                    </a>
                  </li>
                  <li className="py-2 px-7 ">
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm font-semibold"
                    >
                      Tablets And Pads
                    </a>
                  </li>
                  <li className="py-2 px-7 ">
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm font-semibold"
                    >
                      Netbooks
                    </a>
                  </li>
                  <li className="py-2 px-7 ">
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm font-semibold"
                    >
                      Infinity Gaming Notebooks
                    </a>
                  </li>
                </ul>
    </div>
  )
}

export default NestedLiElement