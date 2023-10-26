import React from "react";
import Container from "../Container";
function Support() {
  return (
    <Container color={"#F5F7FF"}>
      <div className="lg:w-[70%] mx-auto flex items-center relative justify-end">
        <div className="left py-24 absolute left-0 md:left-10">
          <div className="px-5 py-3 border border-[#CACDD8] rounded-md w-[240px] lg:w-[340px] bg-white flex justify-between">
            Product Support <span className="text-[#0156FF] ">→</span>
          </div>
          <div className="px-5 py-3 border border-[#CACDD8] rounded-md my-5 w-[240px]  lg:w-[340px] bg-white">
            FAQ <span className="text-[#0156FF]">→</span>
          </div>
          <div className="px-5 py-3 border border-[#CACDD8] rounded-md w-[240px]  lg:w-[340px] bg-white">
            Our Buyer Guide <span className="text-[#0156FF]">→</span>
          </div>
        </div>
        <div className="support__right md:w-[506px] md:h-[275px] lg:h-[407px] lg:w-[656px] w-full h-[315px] "></div>
      </div>
    </Container>
  );
}

export default Support;
