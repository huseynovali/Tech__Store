import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  streetAddress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
});

function CheckoutForm() {
  const [selected, setSelected] = useState(Country[0]);
  const [check, setCheck] = useState(Pickup[0]);

  return (
    <div>
      <div className="shoping__address pt-12">
        <p className="text-lg font-semibold">Shipping Address</p>
        <div className="w-full border mt-2 mb-10"></div>

        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            company: "",
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            phoneNumber: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Form gönderildiğinde yapılacak işlemler
            console.log(values);
            // Örneğin, formu sunucuya gönderme veya başka bir işlem...
          }}
        >
          <Form className="form w-[70%]">
            <div className="input__group">
              <label htmlFor="email" className="block py-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <p className="text-sm text-[#666] py-4">
              You can create an account after checkout.
            </p>

            <div className="w-full border mb-10"></div>

            <div className="input__group py-2">
              <label htmlFor="firstName" className="block py-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group py-2">
              <label htmlFor="lastName" className="block py-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group py-2">
              <label htmlFor="company" className="block py-2">
                Company <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="company"
                name="company"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group py-2">
              <label htmlFor="streetAddress" className="block py-2">
                Street Address <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="streetAddress"
                name="streetAddress"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="streetAddress"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group py-2">
              <label htmlFor="city" className="block py-2">
                City <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="city"
                name="city"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group">
              <label
                htmlFor="state"
                className="text-sm text-black font-semibold py-2 block"
              >
                State/Province <span className="text-red-500">*</span>
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
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
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
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group ">
              <label htmlFor="zipCode" className="block py-2">
                Zip/Postal Code <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="zipCode"
                name="zipCode"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="zipCode"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group">
              <label
                htmlFor="country"
                className="text-sm text-black font-semibold py-2 block"
              >
                Country <span className="text-red-500">*</span>
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
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
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
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="input__group ">
              <label htmlFor="phoneNumber" className="block py-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full py-2 border"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="w-full border  my-10"></div>

            <div className="">
              {Pickup.map((item) => (
                <div key={item}>
                  <p className="text-sm text-black font-semibold py-3">
                    {item}
                  </p>
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

                    <div className=" text-sm text-black pl-2 flex justify-between w-[70%]">
                      {item == "Standard Rate" ? (
                        <>
                          <p>
                            " Price may vary depending on the item/destination.
                            Shop Staff will contact you. $21.00"
                          </p>
                          <span className="font-semibold">$21.00</span>
                        </>
                      ) : (
                        <>
                          <p>1234 Street Adress City Address, 1234 $0.00</p>
                          <span className="font-semibold">$00.00</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-20 py-3 bg-[#0156FF] text-white my-10 rounded-3xl">
              Next
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CheckoutForm;
