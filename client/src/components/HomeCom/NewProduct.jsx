import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { newProduct } from "../../utils/const";
import ProductCard from "../ProductCard";
function NewProduct() {
  return (
    <div className="products py-5">
      <p className="text-xl font-semibold pb-3">New Products</p>
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
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        {newProduct.map((item) => (
          <SwiperSlide>
           <ProductCard data={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewProduct;
