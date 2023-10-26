import React, { useState } from "react";
import Container from "../Container";
import { Link, useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import classNames from "classnames";
import { useSelector } from "react-redux";
import ProductDetailHeaderRight from "./ProductDetailHeaderRight";

function ProductDetailHeader() {
  const location = useLocation();
  const tab = location.pathname.split("/").pop();

  return (
    <Container
      borderBottom="1px solid #a00"
      borderTop="1px solid #a00"
      borderColor={"#CACDD8"}
    >
      <div className="flex justify-between items-center py-6">
        <div className="tabLinks">
          <Link
            to={"aboutproduct"}
            className={classNames(
              " text-sm font-medium  text-[#838383] px-4",
              tab == "aboutproduct"
                ? "text-black underline outline-none underline-offset-4 "
                : "text-[#838383]"
            )}
          >
            About Product
          </Link>
          <Link
            to={"detail"}
            className={classNames(
              " text-sm font-medium  text-[#838383] px-4",
              tab == "detail"
                ? "text-black underline outline-none underline-offset-4 "
                : "text-[#838383]"
            )}
          >
            Details
          </Link>
          <Link
            to={"specs"}
            className={classNames(
              " text-sm font-medium  text-[#838383] px-4",
              tab == "specs"
                ? "text-black underline outline-none underline-offset-4 "
                : "text-[#838383]"
            )}
          >
            Specs
          </Link>
        </div>
        <div className="hidden md:block">
          <ProductDetailHeaderRight />
        </div>
      </div>
    </Container>
  );
}

export default ProductDetailHeader;
