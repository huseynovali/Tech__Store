import React from "react";
import { Outlet, useParams } from "react-router";
import ProductDetailHeader from "../components/ProductDetail.jsx/ProductDetailHeader";
import ProductImgSection from "../components/ProductDetail.jsx/ProductImgSection";
import ProductInfoLayout from "../components/ProductDetail.jsx/ProductInfoLayout";

function ProductDetailLayout() {
  return (
    <div>
      <ProductDetailHeader />
      <div className="flex">
        <ProductInfoLayout />
        <ProductImgSection />
      </div>
    </div>
  );
}

export default ProductDetailLayout;
