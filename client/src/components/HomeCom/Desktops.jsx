import React, { useState } from "react";
import { desktops } from "../../utils/const";
import TabComponent from "./TabComponent";

function Desktops() {
    let [categories] = useState({
        MSI_Infinute_Series: "MSI Infinute Series",
        MSI_Triden: "MSI Triden",
        MSI_GL_Series: "MSI GL Series",
        MSI_Nightblade: "MSI Nightblade",
      });
  return (
    <div>
      <div className="py-5">
      <TabComponent categories={categories} compType={desktops} />
      </div>
    </div>
  );
}

export default Desktops;
