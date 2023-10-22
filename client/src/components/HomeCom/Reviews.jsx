import React from "react";
import Button from "../../components/Buttons/Button";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { reviews } from "../../utils/const";

function Reviews() {
  return (
    <div>
      <div className="bg-[#F5F7FF] lg:w-[85%] m-auto my-12 py-12">
        <div className=" lg:w-[70%] m-auto px-5 ">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((item) => (
              <SwiperSlide>
                <div className="flex items-start relative">
                  <div>
                    <p className="text-lg">{item.description}</p>
                    <span className="block w-full text-right text-sm">
                      - {item.author}
                    </span>
                  </div>
                </div>
                <div className="z-20">
                  <Button className=" text-sm font-semibold text-[#0156FF] border-2 border-[#0156FF] py-2 px-7 rounded-[50px] hover:bg-[#0156FF] hover:text-white transition-colors ">
                    Leave Us A Review
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
