import React from "react";
import Container from "../Container";
import processor from "../../assets/Rectangle 11.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
function Competition() {
  return (
    <Container color={"#000"}>
       <div
          className="right bg-gradient-to-r md:hidden w-full"
          style={{
            background:
              " linear-gradient(90deg, #010101 0%, #0E0F10 68.23%, rgba(20, 21, 23, 0.00) 100%)",
          }}
        >
          <img src={processor} alt="" className="h-full w-full" />
        </div>

      <div className="md:flex justify-between w-full">
        <div className="left md:p-[51px] text-white md:w-[55%] lg:py-[165px] lg:w-[34%] relative">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
  
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide className="lg:pl-10">
              <p className="text-5xl">Outplay the Competittion</p>
              <p className="text-lg  pt-16">
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience.
              </p>
              <p className="text-lg py-4">
          
                *Performance compared to i7-9700. Specs varies by model.
              </p>
            </SwiperSlide>
            <SwiperSlide className="lg:pl-10">
              <p className="text-5xl">Outplay the Competittion</p>
              <p className="text-lg pt-16">
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience.
              </p>
              <p className="text-lg py-4">
                {" "}
                *Performance compared to i7-9700. Specs varies by model.
              </p>
            </SwiperSlide>
            <SwiperSlide className="lg:pl-10">
              <p className="text-5xl">Outplay the Competittion</p>
              <p className="text-lg pt-16">
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience.
              </p>
              <p className="text-lg py-4">
                {" "}
                *Performance compared to i7-9700. Specs varies by model.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="right bg-gradient-to-r lg:w-[56%] hidden md:block "
          style={{
            background:
              " linear-gradient(90deg, #010101 0%, #0E0F10 68.23%, rgba(20, 21, 23, 0.00) 100%)",
          }}
        >
          <img src={processor} alt="" className="h-full w-full" />
        </div>
      </div>
    </Container>
  );
}

export default Competition;
