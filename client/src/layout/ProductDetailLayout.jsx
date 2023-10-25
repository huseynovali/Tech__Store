import React from "react";
import { Outlet, useParams } from "react-router";
import ProductDetailHeader from "../components/ProductDetail.jsx/ProductDetailHeader";
import ProductImgSection from "../components/ProductDetail.jsx/ProductImgSection";
import ProductInfoLayout from "../components/ProductDetail.jsx/ProductInfoLayout";
import Competition from "../components/ProductDetail.jsx/Competition";

function ProductDetailLayout() {
  return (
    <div>
      <ProductDetailHeader />
      <div className="flex">
        <ProductInfoLayout />
        <ProductImgSection />
      </div>
      <Competition/>
    </div>
  );
}

export default ProductDetailLayout;
