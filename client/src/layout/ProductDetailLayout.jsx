import React from "react";
import { Outlet, useParams } from "react-router";
import ProductDetailHeader from "../components/ProductDetail.jsx/ProductDetailHeader";
import ProductImgSection from "../components/ProductDetail.jsx/ProductImgSection";

function ProductDetailLayout() {
  const params = useParams()
 
  return (
    <div>
      {params.id}
      <ProductDetailHeader />
      <div className="flex">
        <Outlet />
        <ProductImgSection/>
      </div>
       

    </div>
  );
}

export default ProductDetailLayout;
