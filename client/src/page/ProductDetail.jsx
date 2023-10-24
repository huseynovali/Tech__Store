import React from "react";
import { Outlet, useLocation, useParams } from "react-router";
import ProductDetailLayout from "../layout/ProductDetailLayout";

function ProductDetail() {
  const location = useParams();

  return (
    <div>
      <ProductDetailLayout />
    </div>
  );
}

export default ProductDetail;
