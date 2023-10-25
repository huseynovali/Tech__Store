import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ProductAbout() {
  const [seletcColor, setColor] = useState("#4B4D4F");
  const data = useSelector((state) => state.productReducer.ProductById);

  return (
    <div>
      <p className="texl-lg">{data.about}</p>
      <div className="colors flex gap-4">
        {data.colors.map((color) => (
          <div
            className={classNames(
              "relative rounded-full border-2  p-[1px]",
              seletcColor == color ? " border-[#0156FF] " : "border-[#F5F7FF]"
            )}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="absolute w-full h-full opacity-0"
              onChange={() => setColor(color)}
            />
            <div
              className={`w-[35px] h-[35px] rounded-full`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductAbout;
