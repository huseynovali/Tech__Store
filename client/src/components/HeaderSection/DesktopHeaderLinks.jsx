import React from "react";
import { compCategory, popComp } from "../../utils/const";
import NestedLiElement from "./NestedLiElement";
import ProductCard from "../ProductCard";
import BrandList from "../BrandList";

function DesktopHeaderLinks() {
  return (
    <div>
      <ul className="flex items-center">
        <li className="group relative">
          <a
            href="#"
            className="px-[12.5px] text-[14px] font-semibold hover:bg-[#0156FF]  hover:text-white rounded-2xl p-2 focus:bg-[#0156FF] focus:text-white "
          >
            Laptops
          </a>
          <div className=" bg-white border hidden group-hover:block absolute shadow-lg mt-1 -left-[100%] z-50">
            <div className="top flex">
              {/*top left */}
              <div className="left  border-0 border-r-2 border-[#CACDD8] min-w-[350px] ">
                <NestedLiElement />
              </div>
              {/* top right */}
              <div className="right flex py-5 px-5 gap-5">
                {popComp.map((item, index) => (
                 <ProductCard data={item}/>
                ))}
              </div>
            </div>
            {/* brand img */}
            <div className="comp__category border-0 border-t-2 border-[#CACDD8] ">
             <BrandList/>
            </div>
          </div>
        </li>
        <li>
          <a href="#" className="px-[12.5px] text-[14px] font-semibold ">
            Desktop PCs
          </a>
        </li>
        <li>
          <a href="#" className="px-[12.5px] text-[14px] font-semibold ">
            Networking Devices
          </a>
        </li>
        <li>
          <a href="#" className="px-[12.5px] text-[14px] font-semibold ">
            Printers & Scanners
          </a>
        </li>
        <li>
          <a href="#" className="px-[12.5px] text-[14px] font-semibold ">
            PC Parts
          </a>
        </li>
        <li>
          <a href="#" className="px-[12.5px] text-[14px] font-semibold ">
            All Other Products
          </a>
        </li>
        <li>
          <a href="#" className="px-[12.5px] text-[14px] font-semibold ">
            Repairs
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DesktopHeaderLinks;
