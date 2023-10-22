import React from "react";
import Button from "../../components/Buttons/Button";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from "swiper/modules";

function Reviews() {
  return (
    <div>
      <div className="bg-[#F5F7FF] w-[70%] m-auto my-12 py-12">
        <div className="w-[80%] m-auto">
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex items-start relative">
                <div>
                  <p className="text-lg">
                    My first order arrived today in perfect condition. From the
                    time I sent a question about the item to making the
                    purchase, to the shipping and now the delivery, your
                    company, Tecs, has stayed in touch. Such great service. I
                    look forward to shopping on your site in the future and
                    would highly recommend it.
                  </p>
                  <span className="block w-full text-right text-sm">
                    - Tama Brown
                  </span>
                </div>
              </div>
              <div className="z-20">
                <Button className=" text-sm font-semibold text-[#0156FF] border-2 border-[#0156FF] py-2 px-7 rounded-[50px] hover:bg-[#0156FF] hover:text-white transition-colors ">
                  Leave Us A Review
                </Button>
              </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>  
  );
}

export default Reviews;
