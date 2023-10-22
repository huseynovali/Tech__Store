import React from "react";
import { news } from "../../utils/const";

function News() {
  return (
    <div className="hidden lg:block">
      <p className="text-xl font-semibold py-5">Follow us on Instagram for News, Offers & More</p>
      <div className="grid grid-cols-6 gap-8">
        {news.map((item) => (
          <div className="text-center">
            <img src={item.newsImg} alt="" />
            <p className="text-xs pt-2 px-4">{item.description}</p>
            <span className="text-[10px] text-[#A2A6B0]">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
