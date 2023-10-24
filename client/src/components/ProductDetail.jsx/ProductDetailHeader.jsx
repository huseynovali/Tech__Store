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
              <p>On Sale from $3,299.00</p>
              <div className="number__input__group">
                <input
                  type="number"
                  min={0}
                  value={compCound}
                  onChange={handleInputChange}
                  className="border-none outline-none bg-[#F5F7FF] w-[70px] h-[50px] py-2 px-3"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetailHeader;
