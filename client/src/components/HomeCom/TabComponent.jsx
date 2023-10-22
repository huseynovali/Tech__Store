import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import CompCategoryList from "./CompCategoryList";
function TabComponent({ categories, compType }) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex ">
          {Object.values(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  " text-sm font-medium  text-[#838383] px-4",

                  selected
                    ? "text-black underline outline-none underline-offset-4 "
                    : "text-[#838383]"
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
                  {/* {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                      return React.cloneElement(child, {
                        data: compType[item],
                      });
                    }
                    return child;
                  })} */}
                  <CompCategoryList data={compType[item]} />
                </Tab.Panel>
              );
            })}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabComponent;
