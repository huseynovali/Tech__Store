import React from "react";
import Container from "../Container";
import intl from "../../assets/intel.png";
import rtx from "../../assets/rtx.png";
import ssd from "../../assets/ssd.png";
import ddr from "../../assets/ddr.png";
function Featues() {
  return (
    <Container
      color={"radial-gradient(50% 50% at 50% 50%, #242528 0%, #040404 100%)"}
    >
      <div className="text-white py-20">
        <p className="text-4xl font-medium text-center">Featues</p>
        <p className="text-lg font-light text-center md:w-[50%] lg:w-[28%] mx-auto pt-7">
          The MPG series brings out the best in gamers by allowing full
          expression in color with advanced RGB lighting control and
          synchronization.
        </p>
        <div className="featues__list grid md:grid-cols-2 lg:grid-cols-4 md:gap-28 lg:gap-24 pt-20 px-16 md:px-20 gap-20">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[136px] h-[136px] bg-black rounded-full flex justify-center items-center ">
              <img src={intl} alt="" />
            </div>
            <p className="text-center text-sm pt-7">
              {" "}
              <span>Intel® Core™ i7</span> processor with the upmost computing
              power to bring you an unparalleled gaming experience.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-[136px] h-[136px] bg-black rounded-full flex justify-center items-center ">
              <img src={rtx} alt="" />
            </div>
            <p className="text-center text-sm pt-7">
              The new <span>GeForce® RTX SUPER™</span> Series has more cores and
              higher clocks for superfast performance compared to previous-gen
              GPUs.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-[136px] h-[136px] bg-black rounded-full flex justify-center items-center ">
              <img src={ssd} alt="" />
            </div>
            <p className="text-center text-sm pt-7">
              Unleash the full potential with the latest{" "}
              <span>SSD technology</span>, the NVM Express. 6 times faster than
              traditional SATA SSD.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-[136px] h-[136px] bg-black rounded-full flex justify-center items-center ">
              <img src={ddr} alt="" />
            </div>
            <p className="text-center text-sm pt-7">
              Featuring the latest <span>10th Gen Intel® Core™ </span>{" "}
              processors, memory can support up to DDR4 2933MHz to delivers an
              unprecedented gaming experience.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Featues;
