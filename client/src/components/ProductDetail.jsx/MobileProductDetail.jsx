import React from "react";
import ProductImgSection from "./ProductImgSection";
import ProductDetailHeader from "../ProductDetail.jsx/ProductDetailHeader";
import ProductInfoLayout from "./ProductInfoLayout";
import ProductDetailHeaderRight from "./ProductDetailHeaderRight";
import Competition from "./Competition";
import Support from "./Support";
import Featues from "../ProductDetail.jsx/Featues";

function MobileProductDetail() {
  return (
    <div>
      <ProductImgSection />
      <ProductDetailHeader />
      <ProductInfoLayout />
      <ProductDetailHeaderRight />
      <Competition />
      <Support />
      <Featues/>
    </div>
  );
}

export default MobileProductDetail;
