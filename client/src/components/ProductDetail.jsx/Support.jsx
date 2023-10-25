import React from "react";
import Container from "../Container";
function Support() {
  return (
    <Container color={"#F5F7FF"}>
      <div className="w-[70%] mx-auto flex items-center relative justify-end">
        <div className="left py-24 absolute left-0">
          <div className="px-5 py-3 border border-[#CACDD8] rounded-md w-[340px] bg-white flex justify-between">
            Product Support <span className="text-[#0156FF] ">→</span>
          </div>
          <div className="px-5 py-3 border border-[#CACDD8] rounded-md my-5 w-[340px] bg-white">
            FAQ <span className="text-[#0156FF]">→</span>
          </div>
          <div className="px-5 py-3 border border-[#CACDD8] rounded-md w-[340px] bg-white">
            Our Buyer Guide <span className="text-[#0156FF]">→</span>
          </div>
        </div>
        <div className="support__right"></div>
      </div>
    </Container>
  );
}

export default Support;
