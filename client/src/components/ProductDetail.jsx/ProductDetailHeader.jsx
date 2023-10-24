import React, { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

function ProductDetailHeader() {
  const [compCound, setCompCound] = useState(0);
  const handleInputChange = (e) => {
    setCompCound(e.target.value);
  };

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="tabLinks">
            <Link to={"aboutproduct"}>About Product</Link>
            <Link to={"detail"}>Details</Link>
            <Link to={"specs"}>Specs</Link>
          </div>
          <div className="right">
            <div className="cound__card flex items-center justify-center">
              <p className="text-sm ">On Sale from <span className="font-semibold">$3,299.00</span></p>
              <div className="number__input__group relative ml-2">
                <input
                  type="number"
                  min={0}
                  value={compCound}
                  onChange={handleInputChange}
                  className="border-none outline-none bg-[#F5F7FF] w-[70px] h-[50px] py-2 px-3 "
                />
                <div className="buttons__number__input  absolute right-0 top-0 max-w-min h-full">
                  <div className="top__btn z-10 h-1/2 flex items-center">
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
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div className="bottom__btn z-10 h-1/2 flex items-center">
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
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pay__buttons">
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetailHeader;
