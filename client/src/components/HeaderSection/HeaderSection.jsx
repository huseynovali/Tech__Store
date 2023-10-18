import React from "react";
import Container from "../Container";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function HeaderSection() {
  return (
    <>
      <Container color={"#fff"}>
        <div className="desktop__header__content hidden lg:block">
          <DesktopHeader />
        </div>
      </Container>
      <Container color={"#0156FF"}>
        <div className="mobil__header__content block lg:hidden ">
          <MobileHeader />
        </div>
      </Container>
    </>
  );
}

export default HeaderSection;
