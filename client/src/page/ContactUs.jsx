import React from "react";
import { useLocation } from "react-router";
import Container from "../components/Container";

function ContactUs() {
  const location = useLocation();
  const url = decodeURIComponent(location.pathname)
    .replaceAll("/", " > ")
    .slice(2);
  console.log(url);
  return (
    <Container borderTop="1px solid #a00" borderColor={"#CACDD8"}>
      <div className="py-5">
        <div className="contuct__us__left">
          <p className="capitalize">{url}</p>
          <p className="text-4xl font-semibold py-4">Contact Us</p>
           <p className="text-lg">We love hearing from you, our Shop customers.</p>
           <p className="text-lg">Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
        </div>
        <div className="contuct__us__right"></div>
      </div>
    </Container>
  );
}

export default ContactUs;
