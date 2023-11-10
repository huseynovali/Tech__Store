import React, { useState } from "react";
import Button from "../Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Store/cardReducer";

function ProductDetailHeaderRight() {
  const data = useSelector((state) => state.productReducer.ProductById);
    const card = useSelector((state) => state.cardReducer.cardProduct);
  console.log(card);
  const [compCound, setCompCound] = useState(1);
  const handleInputChange = (e) => {
    setCompCound(e.target.value);
  };
  const dispatch = useDispatch()

  return (
    <div>
      <div className="right py-8 md:py-0">
        <div className="cound__card flex items-center justify-center">
          <p className="text-sm hidden md:block ">
            On Sale from{" "}
            <span className="font-semibold">${data.price * compCound}</span>
          </p>
          <div className="number__input__group relative ml-2">
            <input
              type="number"
              min={0}
              value={compCound}
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
          <div>
            <div className="pay__buttons flex ml-5 items-center">
              <Button className="bg-[#0156FF] px-8 py-4 rounded-[50px] text-white text-sm " onClick={()=>dispatch(addCart({data,compCound})) }>
                Add to Cart
              </Button>
              <Button className="bg-[#FFB800] px-8 py-4 rounded-[50px] text-white  text-xs flex items-center ml-3">
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
            </div>
          </div>
        </div>

        <div className="py-2 text-center  my-2 bg-[#F5F7FF] md:hidden ">
          <p className="text-sm w-full md:block ">
            On Sale from{" "}
            <span className="font-semibold">${data.price * compCound}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailHeaderRight;
