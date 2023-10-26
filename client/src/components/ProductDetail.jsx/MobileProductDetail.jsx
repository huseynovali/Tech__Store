import React from "react";
import ProductImgSection from "./ProductImgSection";
import ProductDetailHeader from "../ProductDetail.jsx/ProductDetailHeader";
import ProductInfoLayout from "./ProductInfoLayout";
import ProductDetailHeaderRight from "./ProductDetailHeaderRight";
import Competition from "./Competition";
import Support from "./Support";

function MobileProductDetail() {
  return (
    <div>
      <ProductImgSection />
      <ProductDetailHeader />
      <ProductInfoLayout />
      <ProductDetailHeaderRight />
      <Competition />
      <Support />
      
    </div>
  );
}

export default MobileProductDetail;
