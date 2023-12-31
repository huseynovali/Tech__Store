import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";

const Country = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const Pickup = ["Standard Rate", "Pickup from store"];

function DeliveryInfo() {
  const [selected, setSelected] = useState(Country[0]);
  const [check, setCheck] = useState(Pickup[0]);
  return (
    <div>
      {/* country select box  */}
      <div className="input__group">
        <label
          htmlFor="Country"
          className="text-sm text-black font-semibold py-2 block"
        >
          Country
        </label>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white p-3 text-left border border-[#A2A6B0]">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-2 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M6 9.20209L8 7.20209L10 9.20209"
                    stroke="black"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {Country.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="input__group">
        <label
          htmlFor="state"
          className="text-sm text-black font-semibold py-2 block"
        >
          State/Province
        </label>
        <input
          type="text"
          id="state"
          className="w-full p-3 border border-[#A2A6B0] rounded"
        />
      </div>
      <div className="input__group">
        <label
          htmlFor="state"
          className="text-sm text-black font-semibold py-2 block"
        >
          Zip/Postal Code
        </label>
        <input
          type="text"
          id="zip"
          className="w-full p-3 border border-[#A2A6B0] rounded"
        />
      </div>
      <div>
        <div className="py-3">
          {Pickup.map((item) => (
            <div key={item}>
              <p className="text-sm text-black font-semibold py-3">{item}</p>
              <div className="flex">
                <div
                  className={
                    "relative rounded-full border-2  p-[2px] w-[25px] h-[25px] shrink-0 border-[#0156FF]  "
                  }
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="absolute w-full h-full opacity-0"
                    onChange={() => setCheck(item)}
                  />
                  <div
                    className={classNames(
                      " rounded-full w-[18px] h-[18px] shrink-0",
                      item == check ? " bg-[#0156FF] " : "bg-[#F5F7FF] "
                    )}
                  ></div>
                </div>

                <p className=" text-sm text-black pl-2">
                  {item == "Standard Rate"
                    ? " Price may vary depending on the item/destination. Shop Staff will contact you. $21.00"
                    : "1234 Street Adress City Address, 1234 $0.00"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
