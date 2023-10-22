import React from "react";
import { msiLaptops } from "../../utils/const";
import { useState } from "react";
import TabComponent from "./TabComponent";

function MsiLaptopsSection() {
  let [categories] = useState({
    MSI_GS_Series: "MSI GS Series",
    MSI_GT_Series: "MSI GT Series",
    MSI_GL_Series: "MSI GL Series",
    MSI_GE_Series: "MSI GE Series",
  });

  return (
    <div>
      <div className="w-full">
        <TabComponent categories={categories} compType={msiLaptops} />
      </div>
    </div>
  );
}

export default MsiLaptopsSection;
