import React from "react";
import ProductDetailLayout from "../layout/ProductDetailLayout";
import MobileProductDetail from "../components/ProductDetail.jsx/MobileProductDetail";

function ProductDetail() {
  return (
    <div>
      <div className="hidden md:block">
        <ProductDetailLayout />
      </div>
      <div className="block md:hidden">
        <MobileProductDetail />
      </div>
    </div>
  );
}

export default ProductDetail;
