import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

function CheckoutLayout() {
  const location = useLocation();

  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);
  return (
    <div className="flex">
      <div className="left w-[70%] py-3">
        <p className="capitalize">{url}</p>
        <div className="flex items-center ">
          <p className="text-lg md:text-4xl font-semibold py-2 md:py-4 align-middle">
            Checkout
          </p>
          <Link
            to={"/home/login"}
            className="px-20 py-3 rounded-[50px] border-2 border-[#0156FF] text-[#0156FF] font-semibold ml-3 mt-2 hover:bg-[#0156FF] hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </div>
        <Outlet />
      </div>
      <div className="right py-20 px-3">
        <div className="flex">
          <div className="shiping relative">
            <div className="line w-[200px] border border-[#0156FF]"></div>
            <div className="circle absolute -top-5 left-[calc(50%_-_20px)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18.75"
                  transform="rotate(-180 20 20)"
                  fill="white"
                  stroke="#0156FF"
                  stroke-width="2.5"
                />
                <line
                  x1="14.4142"
                  y1="20.5043"
                  x2="18"
                  y2="24.0901"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <line
                  x1="1"
                  y1="-1"
                  x2="11.9985"
                  y2="-1"
                  transform="matrix(-0.707103 0.70711 -0.707103 -0.70711 25.877 15)"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          </div>
          <div className="payment relative">
            {location.pathname.split("/").pop() == "payment" ? (
              <>
                <div className="line w-[200px] border border-[#0156FF]"></div>
                <div className="circle absolute -top-5 left-[calc(50%_-_20px)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="18.75"
                      transform="rotate(-180 20 20)"
                      fill="white"
                      stroke="#0156FF"
                      stroke-width="2.5"
                    />
                    <line
                      x1="14.4142"
                      y1="20.5043"
                      x2="18"
                      y2="24.0901"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                    <line
                      x1="1"
                      y1="-1"
                      x2="11.9985"
                      y2="-1"
                      transform="matrix(-0.707103 0.70711 -0.707103 -0.70711 25.877 15)"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div className="line w-[200px] border border-[#CACDD8]"></div>
                <div className="circle absolute -top-5 left-[calc(50%_-_20px)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="18.75"
                      transform="rotate(-180 20 20)"
                      fill="white"
                      stroke="#CACDD8"
                      strokeWidth="2.5"
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dy=".3em"
                      fontSize="17"
                      fill="#000"
                    >
                      2
                    </text>
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutLayout;
