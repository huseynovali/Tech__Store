import React from "react";
import MobileAccoundPopover from "./MobileAccoundPopover";

function MobileHeader() {
  return (
    <div className="relative flex py-3">
      <div className="logo absolute -top-7 bg-[#0156FF] w-16 h-9 rounded-t-full flex justify-center -z-1">
        <svg
          width="46"
          height="46"
          viewBox="0 0 85 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.0331 13.9453L25.2969 23.8636V36.0707L42.0331 45.989L55.4588 38.3596V41.9836L42.0331 49.9945L25.2969 39.8855V44.2724L42.0331 54L58.7693 44.2724V32.0653L45.3435 39.8855V36.0707L58.7693 28.0598V23.8636L42.0331 13.9453Z"
            fill="#ffF"
          />
        </svg>
      </div>

      <div className="header__components flex items-center">
        <div className="menu__bar ">
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H21"
              stroke="white"
              stroke-width="2.4"
              stroke-linecap="round"
            />
            <path
              d="M4 10H21"
              stroke="white"
              stroke-width="2.4"
              stroke-linecap="round"
            />
            <path
              d="M4 16H21"
              stroke="white"
              stroke-width="2.4"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="search__group bg-white rounded-[25px] flex items-center ml-2 px-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.68983 2.68408C1.59118 3.7811 0.952187 5.25577 0.903058 6.80757C0.853928 8.35937 1.39836 9.87151 2.42541 11.0358C3.45246 12.2002 4.88483 12.9291 6.43063 13.074C7.94673 13.2161 9.46002 12.786 10.6739 11.8702L13.8265 15.0235L13.8265 15.0236C13.9055 15.1025 13.9992 15.1652 14.1024 15.2079C14.2056 15.2506 14.3162 15.2726 14.4279 15.2726C14.5395 15.2726 14.6501 15.2506 14.7533 15.2079C14.8565 15.1652 14.9502 15.1025 15.0292 15.0236C15.1082 14.9446 15.1708 14.8508 15.2135 14.7477C15.2563 14.6445 15.2783 14.5339 15.2783 14.4222C15.2783 14.3105 15.2563 14.1999 15.2135 14.0968C15.1708 13.9936 15.1082 13.8998 15.0292 13.8209L15.0292 13.8209L11.876 10.6685C12.7894 9.45446 13.2176 7.94219 13.0747 6.42754C12.9289 4.88304 12.2002 3.45209 11.0369 2.42579C9.87349 1.39949 8.36283 0.854939 6.81222 0.902922C5.2616 0.950904 3.78751 1.58781 2.68983 2.68408ZM2.68983 2.68408L2.76048 2.75484L2.68983 2.68408ZM10.1154 3.88737C10.5294 4.29472 10.8587 4.78002 11.0842 5.31527C11.3098 5.85052 11.4271 6.42513 11.4295 7.00596C11.4319 7.58679 11.3192 8.16233 11.098 8.6994C10.8768 9.23647 10.5515 9.72444 10.1408 10.1351C9.73008 10.5459 9.24212 10.8712 8.70505 11.0924C8.16798 11.3135 7.59243 11.4262 7.01161 11.4238C6.43078 11.4215 5.85617 11.3041 5.32092 11.0786C4.78567 10.853 4.30037 10.5237 3.89302 10.1097C3.07896 9.28228 2.62483 8.1667 2.62956 7.00596C2.63429 5.84522 3.09748 4.73338 3.91825 3.91261C4.73902 3.09184 5.85087 2.62864 7.01161 2.62391C8.17234 2.61919 9.28792 3.07331 10.1154 3.88737Z"
              fill="#CACDD8"
              stroke="#CACDD8"
              stroke-width="0.2"
            />
          </svg>
          <input
            type="text"
            placeholder="Search here"
            className="outline-none w-full h-full py-3 px-4 rounded-[25px]"
          />
        </div>
        <div className="card relative mx-2">
          <div className="notification w-4 h-4 bg-[#FFF] rounded-full text-[#0156FF] text-[10px] flex justify-center items-center absolute -right-1 -top-2 z-10">
            3
          </div>
          <div className="hover:scale-105 ">
            <svg width="27" height="27" viewBox="0 0 27 27">
              <path
                d="M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      <MobileAccoundPopover/>
      </div>
    </div>
  );
}

export default MobileHeader;
