import React from "react";
import { footerData } from "../../utils/const";

function FooterList() {
  return (
    <div className="py-[45px]">
      <div className="back__data flex justify-between flex-wrap">
        <ul className="text-white">
          <p className="opacity-50 pb-3">Information</p>
          {footerData.Information.map((item) => (
            <li>
              <a href="" className="text-sm ">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="text-white">
          <p className="opacity-50 pb-3">PC Parts</p>
          {footerData.PC_Parts.map((item) => (
            <li>
              <a href="" className="text-sm ">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="text-white">
          <p className="opacity-50 pb-3">Desktop PCs</p>
          {footerData.Desktop_PCs.map((item) => (
            <li>
              <a href="" className="text-sm ">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="text-white">
          <p className="opacity-50 pb-3">Laptops</p>
          {footerData.Laptops.map((item) => (
            <li>
              <a href="" className="text-sm ">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="address text-white w-[290px] text-sm">
          <p className="opacity-50 pb-3">Address</p>
          <p>Address: 1234 Street Adress City Address, 1234</p>
          <p>
            Phones:{" "}
            <a href="tel:+" className="text-[#01A4FF]">
              (00) 1234 5678
            </a>{" "}
          </p>
          <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
          <p>Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 11:00 AM - 5:00 PM</p>
          <p>
            E-mail:{" "}
            <a href="mailto:" className="text-[#01A4FF]">
              {" "}
              shop@email.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterList;
