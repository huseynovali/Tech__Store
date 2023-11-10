import React from "react";
import { Disclosure } from "@headlessui/react";
import Button from "../Buttons/Button";
import DeliveryInfo from "./DeliveryInfo";
import DicountCode from "./DicountCode";

function CartPayment() {
  return (
    <div>
      <p className="text-lg md:text-2xl font-semibold  md:py-4 ">Summary</p>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" w-full  text-left flex justify-between">
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
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <DeliveryInfo />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" w-full  text-left flex pt-5 justify-between">
              <div>
                <p className="pb-2">Apply Discount Code</p>
              </div>
              <div
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 transition-transform`}
              >
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
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className=" pb-2 text-sm ">
              <DicountCode />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      
      <div className="border my-2"></div>
      <div>
        <p className="flex justify-between font-bold text-sm py-3">
          Subtotal <span>$1254</span>
        </p>
        <p className="flex justify-between font-bold text-sm py-3">
          Shiping <span>$1254</span>
        </p>
        <p className="text-[#A2A6B0] text-[10px] w-[70%]">
          (Standard Rate - Price may vary depending on the item/destination.
          TECS Staff will contact you.)
        </p>
        <p className="flex justify-between font-bold text-sm py-3">
          Tax <span>$1254</span>
        </p>
        <p className="flex justify-between font-bold text-sm py-3">
          GST(10%) <span>$1254</span>
        </p>
        <p className="flex justify-between font-bold text-sm py-3">
          Order Total <span>$1254</span>
        </p>
        <Button className="bg-[#0156FF] px-[70px] py-2 rounded-[50px] text-white text-sm mb-2 mt-3 w-full">
          Proceed to Checkout
        </Button>
        <Button className="bg-[#FFB800] px-[70px] py-2 rounded-[50px] text-[#232C65]  text-sm flex items-center w-full">
          Check out with
          <div className="pl-2">
            <svg width="72" height="19" viewBox="0 0 72 19" fill="none">
              <path
                d="M55.6932 5.04547H52.0409C51.8261 5.04547 51.6113 5.256 51.5039 5.46652L50 14.7297C50 14.9402 50.1074 15.0455 50.3223 15.0455H52.2558C52.4706 15.0455 52.578 14.9402 52.578 14.7297L53.0077 12.0981C53.0077 11.8876 53.2225 11.6771 53.5448 11.6771H54.7264C57.197 11.6771 58.5935 10.5192 58.9157 8.20337C59.1306 7.256 58.9157 6.41389 58.486 5.88758C57.8415 5.36126 56.8748 5.04547 55.6932 5.04547ZM56.1228 8.51916C55.908 9.78231 54.9412 9.78231 53.9745 9.78231H53.33L53.7596 7.36126C53.7596 7.256 53.8671 7.15073 54.0819 7.15073H54.2967C54.9412 7.15073 55.5858 7.15073 55.908 7.57179C56.1228 7.67705 56.1228 7.99284 56.1228 8.51916Z"
                fill="#139AD6"
              />
              <path
                d="M27.6567 4.64545H23.771C23.5425 4.64545 23.3139 4.87402 23.1996 5.10259L21.5996 15.1597C21.5996 15.3883 21.7139 15.5026 21.9425 15.5026H23.771C23.9996 15.5026 24.2282 15.274 24.3425 15.0454L24.7996 12.3026C24.7996 12.074 25.0282 11.8454 25.371 11.8454H26.6282C29.2567 11.8454 30.7424 10.5883 31.0853 8.07401C31.3139 7.04544 31.0853 6.13116 30.6282 5.55973C29.9424 4.9883 29.0282 4.64545 27.6567 4.64545ZM28.1139 8.41687C27.8853 9.78829 26.8567 9.78829 25.8282 9.78829H25.2567L25.7139 7.15973C25.7139 7.04544 25.8282 6.93115 26.0567 6.93115H26.2853C26.971 6.93115 27.6567 6.93115 27.9996 7.3883C28.1139 7.50258 28.2282 7.84544 28.1139 8.41687Z"
                fill="#263B80"
              />
              <path
                d="M39.4282 8.30261H37.5996C37.4854 8.30261 37.2568 8.41689 37.2568 8.53118L37.1425 9.1026L37.0282 8.87403C36.5711 8.30261 35.7711 8.07404 34.8568 8.07404C32.7997 8.07404 30.9711 9.67403 30.6282 11.8455C30.3997 12.9883 30.7425 14.0169 31.3139 14.7026C31.8854 15.3883 32.6854 15.6169 33.7139 15.6169C35.4282 15.6169 36.3425 14.5883 36.3425 14.5883L36.2282 15.1597C36.2282 15.3883 36.3425 15.5026 36.5711 15.5026H38.2854C38.5139 15.5026 38.7425 15.274 38.8568 15.0454L39.8854 8.64546C39.7711 8.53118 39.5425 8.30261 39.4282 8.30261ZM36.7996 11.9597C36.5711 12.9883 35.7711 13.7883 34.6282 13.7883C34.0568 13.7883 33.5997 13.5597 33.3711 13.3312C33.1425 12.9883 33.0282 12.5312 33.0282 11.9597C33.1425 10.9312 34.0568 10.1312 35.0854 10.1312C35.6568 10.1312 35.9996 10.3597 36.3425 10.5883C36.6854 10.9312 36.7996 11.5026 36.7996 11.9597Z"
                fill="#263B80"
              />
              <path
                d="M67.51 8.2879H65.5498C65.4273 8.2879 65.1823 8.40911 65.1823 8.53032L65.0598 9.13638L64.9373 8.89396C64.4472 8.2879 63.5897 8.04547 62.6096 8.04547C60.4044 8.04547 58.4443 9.74244 58.0767 12.0455C57.8317 13.2576 58.1993 14.3485 58.8118 15.0758C59.4243 15.803 60.2819 16.0455 61.3845 16.0455C63.2221 16.0455 64.2022 14.9546 64.2022 14.9546L64.0797 15.5606C64.0797 15.803 64.2022 15.9243 64.4472 15.9243H66.2849C66.5299 15.9243 66.7749 15.6818 66.8974 15.4394L68 8.65153C67.8775 8.53032 67.755 8.2879 67.51 8.2879ZM64.6922 12.1667C64.4472 13.2576 63.5897 14.1061 62.3646 14.1061C61.752 14.1061 61.262 13.8637 61.017 13.6212C60.7719 13.2576 60.6494 12.7727 60.6494 12.1667C60.772 11.0758 61.752 10.2273 62.8546 10.2273C63.4672 10.2273 63.8347 10.4697 64.2022 10.7121C64.6922 11.0758 64.8148 11.6818 64.6922 12.1667Z"
                fill="#139AD6"
              />
              <path
                d="M49.7137 8.04547H47.7899C47.5636 8.04547 47.4504 8.16041 47.3372 8.27535L44.8476 12.1834L43.716 8.50524C43.6028 8.27536 43.4896 8.16041 43.1501 8.16041H41.3395C41.1132 8.16041 41 8.3903 41 8.62018L43.037 14.7121L41.1132 17.4708C41 17.7006 41.1132 18.0455 41.3395 18.0455H43.1501C43.3765 18.0455 43.4896 17.9305 43.6028 17.8156L49.8269 8.73513C50.1664 8.3903 49.94 8.04547 49.7137 8.04547Z"
                fill="#263B80"
              />
              <path
                d="M69.5556 5.32134L68 15.6995C68 15.9302 68.1111 16.0455 68.3333 16.0455H69.8889C70.1111 16.0455 70.3333 15.8148 70.4444 15.5842L72 5.43665C72 5.20602 71.8889 5.09071 71.6667 5.09071H69.8889C69.7778 4.9754 69.6667 5.09071 69.5556 5.32134Z"
                fill="#139AD6"
              />
              <path
                d="M13.0638 1.39758C12.2686 0.496174 10.7918 0.0454712 8.74706 0.0454712H3.06715C2.72636 0.0454712 2.38556 0.383498 2.27196 0.721526L0 15.4821C0 15.8201 0.227196 16.0455 0.454393 16.0455H3.97594L4.88472 10.5243V10.7497C4.99832 10.4117 5.33911 10.0736 5.67991 10.0736H7.38388C10.6782 10.0736 13.1774 8.72153 13.9726 5.00322C13.9726 4.89054 13.9726 4.77786 13.9726 4.66519C13.859 4.66519 13.859 4.66519 13.9726 4.66519C14.0862 3.2004 13.859 2.29899 13.0638 1.39758Z"
                fill="#263B80"
              />
              <path
                d="M13.712 4.04547C13.712 4.16312 13.712 4.28077 13.712 4.39841C12.9566 8.39841 10.5826 9.69253 7.45314 9.69253H5.83448C5.51075 9.69253 5.18702 10.0455 5.07911 10.3984L4 17.5749C4 17.8102 4.10791 18.0455 4.43164 18.0455H7.23732C7.56105 18.0455 7.88479 17.8102 7.88479 17.4572V17.3396L8.42434 13.6925V13.4572C8.42434 13.1043 8.74807 12.869 9.07181 12.869H9.50345C12.2012 12.869 14.3594 11.6925 14.899 8.16312C15.1148 6.75135 15.0069 5.45724 14.3594 4.63371C14.2515 4.39841 14.0357 4.16312 13.712 4.04547Z"
                fill="#139AD6"
              />
              <path
                d="M13 4.39547C12.8889 4.39547 12.7778 4.2788 12.6667 4.2788C12.5556 4.2788 12.4444 4.2788 12.3333 4.16214C11.8889 4.04547 11.4444 4.04547 10.8889 4.04547H6.55556C6.44444 4.04547 6.33333 4.04547 6.22222 4.16214C6 4.2788 5.88889 4.51214 5.88889 4.74547L5 10.8121V11.0455C5.11111 10.6955 5.44444 10.3455 5.77778 10.3455H7.44444C10.6667 10.3455 13.1111 8.94547 13.8889 5.09547C13.8889 4.9788 13.8889 4.86214 14 4.74547C13.7778 4.6288 13.6667 4.51214 13.4444 4.51214C13.1111 4.39547 13.1111 4.39547 13 4.39547Z"
                fill="#232C65"
              />
            </svg>
          </div>
        </Button>

        <Button className="px-[30px] py-2 rounded-[50px] text-[#A2A6B0] border border-[#A2A6B0] text-sm mb-2 mt-3 w-full">
          Check Out with Multiple Addresses
        </Button>
        <div className="bg-[#F5F7FF] py-5 flex justify-center items-center ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="21"
              viewBox="0 0 59 21"
              fill="none"
            >
              <g clipPath="url(#clip0_133_4184)">
                <path
                  d="M20.9062 7.86422L16.1837 12.0733H4.48756C3.39659 12.0718 2.34278 12.4659 1.52484 13.1812L7.42392 7.92211L7.51443 7.84265L14.9052 1.24865C16.0969 0.18653 17.77 -0.164992 19.2942 0.326501C20.8184 0.817994 21.9622 2.07783 22.2947 3.63145C22.6272 5.18506 22.0979 6.79642 20.9062 7.85854V7.86422Z"
                  fill="#F15B41"
                />
                <path
                  d="M4.48761 9.00709C6.96605 9.00709 8.97522 7.0164 8.97522 4.56077C8.97522 2.10513 6.96605 0.114441 4.48761 0.114441C2.00917 0.114441 0 2.10513 0 4.56077C0 7.0164 2.00917 9.00709 4.48761 9.00709Z"
                  fill="#F99D1D"
                />
                <path
                  d="M4.48761 12.0733C3.39665 12.0718 2.34284 12.4659 1.5249 13.1812L1.48709 13.2152C-0.355444 14.8571 -0.505734 17.6681 1.15141 19.4937C2.80855 21.3193 5.6456 21.4682 7.48814 19.8263L16.1849 12.0744L4.48761 12.0733Z"
                  fill="#272560"
                />
                <path
                  d="M16.1777 12.0767L7.47993 19.8285C6.65636 20.5623 5.58707 20.9669 4.47949 20.9637L17.8984 20.9637C20.4868 20.9227 22.3142 18.9933 22.3142 16.5179C22.3142 14.0425 20.3485 12.111 17.8984 12.0722L16.1777 12.0767Z"
                  fill="#00B6BD"
                />
                <path
                  d="M28.8199 17.2466C28.4463 17.2603 28.0849 17.1143 27.8281 16.8459C27.5766 16.575 27.4426 16.2177 27.4545 15.8504C27.451 15.4805 27.5436 15.1159 27.7235 14.7913C27.8815 14.5012 28.0744 14.2309 28.2981 13.9865L33.8504 7.78643H29.0107C28.5418 7.78643 28.2062 7.62751 28.0223 7.31194C27.8432 6.99493 27.7539 6.63616 27.7637 6.27329C27.7508 5.92357 27.8528 5.57912 28.0545 5.2914C28.2544 5.01912 28.5797 4.86464 28.9199 4.88048H37.4708C37.8323 4.86403 38.1849 4.99447 38.4465 5.24145C38.689 5.48097 38.812 5.82151 38.812 6.25286C38.8222 6.58875 38.7513 6.92223 38.6051 7.22567C38.4648 7.49005 38.2889 7.73443 38.0822 7.95216L32.3 14.3396H37.7788C38.1084 14.3315 38.4221 14.479 38.6235 14.7369C38.8381 15.0251 38.9464 15.3772 38.9304 15.7346C38.946 16.107 38.8556 16.4763 38.6695 16.8005C38.4822 17.0968 38.15 17.2478 37.6834 17.2478L28.8199 17.2466Z"
                  fill="#272560"
                />
                <path
                  d="M42.2519 17.4101C40.7302 17.4101 40.413 16.6382 40.413 15.9912V6.54686C40.413 6.05307 40.5636 5.6535 40.8624 5.3595C41.1612 5.0655 41.637 4.91567 42.2783 4.91567C42.8185 4.91567 43.246 5.03713 43.5506 5.27777C43.8552 5.51842 44.0241 5.90664 44.0241 6.4061V15.9412C44.0241 16.46 43.8586 16.8414 43.5322 17.0764C43.2058 17.3113 42.7863 17.4101 42.2519 17.4101ZM42.2519 3.90199C41.6589 3.90199 41.1727 3.73059 40.8049 3.39231C40.4371 3.05404 40.2452 2.5875 40.2452 2.01426C40.2311 1.50606 40.4333 1.01527 40.8026 0.66118C41.1669 0.308153 41.6554 0.127666 42.2519 0.127666C42.7438 0.128726 43.2219 0.28813 43.6138 0.581721C44.0414 0.892748 44.2586 1.37631 44.2586 2.0188C44.2586 2.59204 44.0701 3.05631 43.6989 3.39799C43.3276 3.73967 42.8415 3.9054 42.2519 3.9054V3.90199Z"
                  fill="#272560"
                />
                <path
                  d="M47.9916 21.0291C46.5687 21.0291 46.2676 20.2447 46.2676 19.5863V6.22677C46.2553 5.80832 46.4183 5.4034 46.7181 5.10751C47.0158 4.81351 47.4928 4.66367 48.1341 4.66367C48.533 4.65967 48.927 4.74996 49.2834 4.92702C49.6615 5.11886 49.8581 5.4946 49.8581 6.03379C49.9347 5.94676 50.017 5.85747 50.1052 5.7659C50.3467 5.52372 50.6168 5.31107 50.9097 5.13249C51.6215 4.69366 52.4463 4.46666 53.2853 4.47864C54.0893 4.46321 54.8859 4.63347 55.6115 4.97584C56.2756 5.2996 56.8538 5.77231 57.2998 6.35617C57.7647 6.98067 58.1041 7.68737 58.2997 8.43803C58.5235 9.28626 58.6332 10.1599 58.6261 11.0364C58.6344 11.9292 58.5081 12.8183 58.2515 13.6745C58.0247 14.435 57.6525 15.1455 57.155 15.7677C56.6757 16.3539 56.0682 16.8254 55.3782 17.1469C54.6274 17.4869 53.8089 17.6564 52.983 17.6429C52.43 17.6586 51.8782 17.5819 51.351 17.4159C50.9724 17.2891 50.6126 17.1132 50.281 16.8926C50.1013 16.7721 49.9355 16.6324 49.7868 16.476V19.5182C49.7868 20.0472 49.6408 20.4377 49.3524 20.6783C49.0639 20.919 48.6202 21.0291 47.9916 21.0291ZM52.3658 7.50494C51.9742 7.49559 51.5868 7.58589 51.2407 7.76716C50.915 7.94956 50.6359 8.20311 50.4247 8.50841C50.1874 8.85384 50.0142 9.23821 49.9132 9.64356C49.7943 10.1146 49.736 10.5986 49.7397 11.0841C49.7397 12.1897 49.9695 13.0762 50.4293 13.7199C50.889 14.3635 51.5131 14.6643 52.3704 14.6643C53.2278 14.6643 53.8519 14.3419 54.2852 13.6779C54.7185 13.0138 54.9495 12.1295 54.9495 11.0841C54.9509 10.5999 54.8907 10.1174 54.7702 9.6481C54.6692 9.2445 54.4998 8.86069 54.2691 8.51295C54.0639 8.20723 53.7882 7.95396 53.4646 7.77397C53.1278 7.59253 52.7494 7.49987 52.3658 7.50494Z"
                  fill="#272560"
                />
              </g>
              <defs>
                <clipPath id="clip0_133_4184">
                  <rect width="59" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="line w-[2px] h-6 mx-3 bg-[#00AEB8] hidden lg:block"></div>
          <p className="text-[#272560] text-xs">
            <b>own</b> it now, up to 6 months interest free{"  "}
            <span className="text-[#272560] underline ">learn more</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
