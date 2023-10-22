import React from "react";
import { customBuild } from "../../utils/const";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
function CompCategoryList() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div
        style={{ backgroundImage: `url(${customBuild.headerImg})` }}
        className="w-full bg-cover bg-center  bg-no-repeat lg:w-[230px] shrink-0 flex justify-center items-end py-8"
      >
        <div className="lg:h-1/2 lg:w-1/2 flex flex-col  justify-between items-center text-white  text-center">
          <p className="text-xl font-semibold">{customBuild.headerText}</p>
          <span className="underline text-xs pt-2">See All Products</span>
        </div>
      </div>

      <div className="w-full lg:w-[calc(100%_-_230px)] products-1 py-4">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          {customBuild.comps.map((item) => (
            <SwiperSlide>
              <ProductCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CompCategoryList;
