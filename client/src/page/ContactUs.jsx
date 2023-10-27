import React from "react";
import Container from "../components/Container";
import ContactUsComp from "../components/ContactUs/ContactUsComp";
import AddressInfo from "../components/ContactUs/AddressInfo";

function ContactUs() {
  return (
    <Container borderTop="1px solid #a00" borderColor={"#CACDD8"}>
      <div className="flex">
        <ContactUsComp />
        <AddressInfo />
      </div>
    </Container>
  );
}

export default ContactUs;
