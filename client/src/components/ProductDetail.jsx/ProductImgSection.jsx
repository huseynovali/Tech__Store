import React from "react";
import { useSelector } from "react-redux";

function ProductImgSection() {
  const data = useSelector((state) => state.productReducer.ProductById);

  return (
    <div className="px-28 py-20 relative">
      <div className="absolute left-6">
        <div className="hover:scale-105 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="14" stroke="#A2A6B0" stroke-width="2" />
            <path
              d="M14.6851 11.8254L15.3954 12.5419L16.1056 11.8254C16.7788 11.1462 17.8139 10.375 18.8922 10.375C19.9606 10.375 20.8026 10.7307 21.3714 11.278C21.9374 11.8225 22.2936 12.6141 22.2936 13.6095C22.2936 14.6805 21.8643 15.5925 21.1287 16.4761C20.3739 17.3829 19.3563 18.1913 18.2509 19.0643L18.2252 19.0846C17.2883 19.8241 16.2458 20.647 15.3958 21.5675C14.5542 20.655 13.5216 19.8387 12.593 19.1047L12.5424 19.0646L12.542 19.0643C11.4363 18.1911 10.4189 17.3825 9.66433 16.4757C8.92905 15.5921 8.5 14.6802 8.5 13.6095C8.5 12.6141 8.8562 11.8226 9.42223 11.278C9.99108 10.7308 10.8333 10.375 11.9021 10.375C12.9791 10.375 14.0111 11.1454 14.6851 11.8254Z"
              stroke="#A2A6B0"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="py-2 hover:scale-105 cursor-pointer">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15.041"
              cy="15.4766"
              r="14"
              stroke="#A2A6B0"
              stroke-width="2"
            />
            <path
              d="M10.4199 21.5649V17.0792"
              stroke="#A2A6B0"
              stroke-width="2.2"
              stroke-linecap="round"
            />
            <path
              d="M15 21.5649L15 8.16895"
              stroke="#A2A6B0"
              stroke-width="2.2"
              stroke-linecap="round"
            />
            <path
              d="M19.6611 21.5649L19.6611 12.7233"
              stroke="#A2A6B0"
              stroke-width="2.2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="hover:scale-105 cursor-pointer">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15"
              cy="15.9535"
              r="14"
              stroke="#A2A6B0"
              stroke-width="2"
            />
            <path
              d="M21.6667 10.7877H8.33333C7.8731 10.7877 7.5 11.1608 7.5 11.6211V21.6211C7.5 22.0813 7.8731 22.4544 8.33333 22.4544H21.6667C22.1269 22.4544 22.5 22.0813 22.5 21.6211V11.6211C22.5 11.1608 22.1269 10.7877 21.6667 10.7877Z"
              stroke="#A2A6B0"
              stroke-width="1.7"
              stroke-linecap="round"
            />
            <path
              d="M7.5 12.0377L15 16.6211L22.5 12.0377"
              stroke="#A2A6B0"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="w-[250px]">
        <img src={data.photo} alt="" className="h-[400px] w-[250px]" />
        <div className="flex justify-center items-center pt-8 ">
          <div>
            <svg
              width="77"
              height="27"
              viewBox="0 0 77 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_50_1170)">
                <path
                  d="M27.2846 10.1111L21.1213 15.5228H5.85683C4.43303 15.5209 3.05772 16.0276 1.99023 16.9472L9.68903 10.1856L9.80715 10.0834L19.4527 1.60541C21.008 0.239823 23.1915 -0.212134 25.1807 0.419786C27.17 1.05171 28.6627 2.6715 29.0967 4.669C29.5306 6.66651 28.8398 8.73825 27.2846 10.1038V10.1111Z"
                  fill="#F15B41"
                />
                <path
                  d="M5.85671 11.5798C9.09128 11.5798 11.7134 9.02039 11.7134 5.86314C11.7134 2.70589 9.09128 0.146437 5.85671 0.146437C2.62214 0.146437 0 2.70589 0 5.86314C0 9.02039 2.62214 11.5798 5.85671 11.5798Z"
                  fill="#F99D1D"
                />
                <path
                  d="M5.85698 15.5228C4.43317 15.5209 3.05787 16.0276 1.99038 16.9472L1.94104 16.991C-0.463624 19.102 -0.659766 22.7161 1.50295 25.0633C3.66566 27.4105 7.36825 27.6019 9.77291 25.4909L21.123 15.5243L5.85698 15.5228Z"
                  fill="#272560"
                />
                <path
                  d="M21.1128 15.5272L9.76153 25.4938C8.68669 26.4373 7.29118 26.9574 5.8457 26.9534L23.3585 26.9533C26.7365 26.9006 29.1215 24.42 29.1215 21.2373C29.1215 18.0547 26.5561 15.5712 23.3585 15.5214L21.1128 15.5272Z"
                  fill="#00B6BD"
                />
                <path
                  d="M37.612 22.1742C37.1244 22.1918 36.6527 22.0041 36.3175 21.6591C35.9894 21.3108 35.8145 20.8513 35.8301 20.3791C35.8255 19.9035 35.9463 19.4347 36.181 19.0174C36.3873 18.6444 36.6391 18.2969 36.931 17.9827L44.1773 10.0111H37.861C37.249 10.0111 36.811 9.80679 36.571 9.40106C36.3374 8.99347 36.2208 8.53219 36.2335 8.06565C36.2167 7.61601 36.3498 7.17314 36.613 6.80322C36.8739 6.45314 37.2986 6.25452 37.7425 6.27489H48.9021C49.3739 6.25374 49.8341 6.42145 50.1755 6.739C50.492 7.04695 50.6525 7.48479 50.6525 8.03938C50.6659 8.47125 50.5733 8.9 50.3825 9.29014C50.1994 9.63005 49.9699 9.94426 49.7001 10.2242L42.1538 18.4366H49.3041C49.7342 18.4262 50.1437 18.6159 50.4065 18.9474C50.6866 19.318 50.8279 19.7707 50.807 20.2302C50.8274 20.709 50.7095 21.1838 50.4665 21.6007C50.222 21.9816 49.7886 22.1757 49.1796 22.1757L37.612 22.1742Z"
                  fill="#272560"
                />
                <path
                  d="M55.1423 22.3844C53.1563 22.3844 52.7424 21.392 52.7424 20.5601V8.41738C52.7424 7.78252 52.9389 7.26879 53.3288 6.89079C53.7188 6.51279 54.3398 6.32014 55.1768 6.32014C55.8817 6.32014 56.4397 6.4763 56.8372 6.78571C57.2347 7.09511 57.4552 7.59425 57.4552 8.23641V20.4959C57.4552 21.1628 57.2392 21.6532 56.8132 21.9553C56.3872 22.2574 55.8397 22.3844 55.1423 22.3844ZM55.1423 5.01684C54.3683 5.01684 53.7338 4.79646 53.2538 4.36154C52.7739 3.92663 52.5234 3.32679 52.5234 2.58976C52.5049 1.93636 52.7688 1.30535 53.2508 0.850085C53.7263 0.396193 54.3638 0.164139 55.1423 0.164139C55.7842 0.165501 56.4082 0.370449 56.9197 0.747923C57.4777 1.14781 57.7612 1.76954 57.7612 2.5956C57.7612 3.33262 57.5152 3.92954 57.0307 4.36884C56.5462 4.80814 55.9117 5.02122 55.1423 5.02122V5.01684Z"
                  fill="#272560"
                />
                <path
                  d="M62.6326 27.0374C60.7757 27.0374 60.3827 26.0289 60.3827 25.1824V8.00583C60.3666 7.46783 60.5794 6.94722 60.9707 6.56679C61.3591 6.18879 61.9816 5.99614 62.8186 5.99614C63.3392 5.99099 63.8535 6.10709 64.3185 6.33473C64.812 6.58138 65.0685 7.06447 65.0685 7.75772C65.1685 7.64583 65.276 7.53102 65.391 7.41329C65.7062 7.10192 66.0587 6.8285 66.441 6.5989C67.37 6.03469 68.4463 5.74284 69.5413 5.75824C70.5907 5.7384 71.6302 5.9573 72.5772 6.39749C73.4439 6.81376 74.1985 7.42152 74.7807 8.17221C75.3874 8.97514 75.8303 9.88375 76.0856 10.8489C76.3776 11.9395 76.5208 13.0627 76.5116 14.1896C76.5223 15.3376 76.3575 16.4807 76.0226 17.5814C75.7267 18.5592 75.2409 19.4728 74.5917 20.2727C73.9661 21.0264 73.1733 21.6327 72.2727 22.046C71.2929 22.4832 70.2247 22.7011 69.1469 22.6838C68.4251 22.7039 67.7049 22.6053 67.0169 22.3919C66.5228 22.2289 66.0532 22.0026 65.6205 21.7191C65.3859 21.5641 65.1696 21.3845 64.9755 21.1834V25.0948C64.9755 25.7749 64.785 26.277 64.4085 26.5864C64.032 26.8958 63.4531 27.0374 62.6326 27.0374ZM68.3414 9.6492C67.8303 9.63717 67.3246 9.75327 66.8729 9.98634C66.4479 10.2208 66.0836 10.5468 65.808 10.9394C65.4983 11.3835 65.2723 11.8777 65.1405 12.3989C64.9853 13.0045 64.9092 13.6268 64.914 14.2509C64.914 15.6725 65.214 16.8123 65.814 17.6398C66.414 18.4673 67.2284 18.8541 68.3474 18.8541C69.4663 18.8541 70.2808 18.4396 70.8463 17.5858C71.4118 16.732 71.7133 15.5951 71.7133 14.2509C71.7151 13.6284 71.6365 13.0081 71.4793 12.4047C71.3475 11.8858 71.1264 11.3923 70.8253 10.9452C70.5575 10.5521 70.1977 10.2265 69.7753 9.9951C69.3358 9.76181 68.842 9.64268 68.3414 9.6492Z"
                  fill="#272560"
                />
              </g>
              <defs>
                <clipPath id="clip0_50_1170">
                  <rect width="77" height="27" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="line w-[2px] h-6 mx-3 bg-[#00AEB8] hidden lg:block"></div>
          <p className="text-[#272560] text-xs ">
            <b>own</b> it now, up to 6 months interest free{" "}
            <span className="text-[#272560] text-xs underline ">
              {" "}
              learn more
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductImgSection;
