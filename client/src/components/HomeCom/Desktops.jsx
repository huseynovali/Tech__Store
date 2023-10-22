import React from "react";
import CompCategoryList from "./CompCategoryList";
import { desktops } from "../../utils/const";

function Desktops() {
  return (
    <div>
      <div className="py-5">
        <CompCategoryList data={desktops} />
      </div>
    </div>
  );
}

export default Desktops;
