import React from "react";
import ProductImgSection from "./ProductImgSection";
import ProductDetailHeader from "../ProductDetail.jsx/ProductDetailHeader";
import ProductInfoLayout from "./ProductInfoLayout";
import ProductDetailHeaderRight from "./ProductDetailHeaderRight";
import Competition from "./Competition";

function MobileProductDetail() {
  return (
    <div>
      <ProductImgSection />
      <ProductDetailHeader />
      <ProductInfoLayout/>
      <ProductDetailHeaderRight/>
      <Competition/>
    </div>
  );
}

export default MobileProductDetail;
