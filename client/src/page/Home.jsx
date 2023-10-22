import React from "react";
import Slide from "../components/HomeCom/Slide";
import Container from "../components/Container";
import NewProduct from "../components/HomeCom/NewProduct";
import ZipContainer from "../components/HomeCom/ZipContainer";
import CustomeBuildsSection from "../components/HomeCom/CustomeBuildsSection";
import MsiLaptopsSection from "../components/HomeCom/MsiLaptopsSection";
import Desktops from "../components/HomeCom/Desktops";
import Monitor from "../components/HomeCom/Monitor";
import BrandList from "../components/BrandList";
import News from "../components/HomeCom/News";
function Home() {
  return (
    <div>
      <Container>
        <Slide />
        <NewProduct />
        <ZipContainer />
        <CustomeBuildsSection />
        <MsiLaptopsSection />
        <Desktops />
        <Monitor />
        <BrandList />
        <News/>
      </Container>
    </div>
  );
}

export default Home;
