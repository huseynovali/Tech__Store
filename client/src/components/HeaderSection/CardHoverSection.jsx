import React from "react";
import Button from "../Buttons/Button";

function CardHoverSection() {
  return (
    <div className="">
      <div></div>
      <div className="p-[30px] text-center border-b">
        <p className="text-lg font-semibold">My Cart</p>
        <span className="text-xs text-[#A2A6B0]">
          {Array(5).length} item in cart
        </span>
        <Button className=" text-[#0156FF] text-sm border-2 border-[#0156FF] py-2 px-12 rounded-[50px] hover:bg-[#0156FF] hover:text-white transition-colors font-semibold">
          View or Edit Your Cart
        </Button>
      </div>
      <div className="cart__list">
        {Array(3).map((item, index) => (
          <div className="flex">
            <div>
              <div>{item.quality}X</div>
            </div>
            <img src="" alt="" />
            <div className="card__product__info">
              <p>{item.info}</p>
            </div>
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9.25"
                  fill="white"
                  stroke="#CACDD8"
                  stroke-width="1.5"
                />
                <path
                  d="M7 7L13.5 13.5"
                  stroke="#A2A6B0"
                  stroke-linecap="round"
                />
                <path
                  d="M13.5 7L7 13.5"
                  stroke="#A2A6B0"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardHoverSection;
