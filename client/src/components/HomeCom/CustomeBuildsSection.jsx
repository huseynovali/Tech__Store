import React from "react";
import CompCategoryList from "./CompCategoryList";
import { customBuild } from "../../utils/const";
function CustomeBuildsSection() {
  return (
    <div className="py-5">
        <CompCategoryList data={customBuild} />
    </div>

  
  )
}

export default CustomeBuildsSection;
