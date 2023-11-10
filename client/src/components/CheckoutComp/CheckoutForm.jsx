import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import ListBoxCom from "./ListBoxCom";

const Country = [
  { name: "Azerbaijan" },
  { name: "Kazakhstan" },
  { name: "Malaysia" },
  { name: "Pakistan" },
  { name: "Turkey" },
  { name: "Wales" },
];
const State = [
  { name: "Alaska" },
  { name: "Arizona" },
  { name: "California" },
  { name: "Connecticut" },
  { name: "Florida" },
  { name: "Georgia" },
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
  const [selectedCountry, setSelectedCountry] = useState(Country[0]);
  const [selectedState, setSelectedState] = useState(State[0]);
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

              <ListBoxCom
                data={State}
                value={selectedState}
                setSelectedState={setSelectedState}
              />
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
              <ListBoxCom
                data={Country}
                value={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
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
