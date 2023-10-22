import React from "react";
import CompCategoryList from "./CompCategoryList";
import { msiLaptops } from "../../utils/const";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

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
        {console.log(categories)}
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.values(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="w-full">
            <div className="py-5">
              {Object.keys(categories).map((item, idx) => {
                return (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      "rounded-xl bg-white p-3",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <CompCategoryList data={msiLaptops[item]} />
                  </Tab.Panel>
                );
              })}
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default MsiLaptopsSection;
