import React from "react";
import { useLocation } from "react-router";
import ContactUsForm from "./ContactUsForm";
import AddressInfo from "./AddressInfo";

function ContactUsComp() {
  const location = useLocation();
  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);

  return (
    <div>
      <div className="py-5">
        <div className="contuct__us__left">
          <p className="capitalize">{url}</p>
          <p className="text-4xl font-semibold py-4">Contact Us</p>
          <div className="flex justify-between">
            <div>
              <p className="text-lg">
                We love hearing from you, our Shop customers.
              </p>
              <p className="text-lg">
                Please contact us and we will make sure to get back to you as
                soon as we possibly can.
              </p>
              <ContactUsForm />
            </div>
            <AddressInfo/>
          </div>
        </div>
        <div className="contuct__us__right"></div>
      </div>
    </div>
  );
}

export default ContactUsComp;
