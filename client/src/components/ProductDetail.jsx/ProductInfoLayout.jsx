import React from "react";
import { Outlet, useParams } from "react-router";
import { useSelector } from "react-redux";

function ProductInfoLayout() {
  const params = useParams();
  const data = useSelector((state) => state.productReducer.ProductById);

  return (
    <div className=" w-[60%] bg-[#F5F7FF] flex justify-end lg:px-28 px-5">
      <div className=" md:py-8 lg:py-16 lg:w-[550px] flex flex-col items-end">
        <div className="lg:w-[480px]">
          <p className="">{`${params.category} > ${params.compCategory}`}</p>
          <p className="text-3xl font-semibold pt-6 pb-3">{data.name}</p>
          <a href="#" className=" text-[#0156FF] pb-6 block">
            Be the first to review this product
          </a>
          <Outlet />
          <div className="flex justify-between items-center pt-8">
            <p className="text-xs font-semibold">
              Have a Question?{" "}
              <a href="#" className=" text-[#0156FF]">
                Contact Us
              </a>{" "}
            </p>
            <p className="text-xs ">SKU D5515AI</p>
          </div>
        </div>

        <p className="text-left w-full text-sm font-semibold pt-20 hidden lg:block">
          + More information
        </p>
      </div>
    </div>
  );
}

export default ProductInfoLayout;
