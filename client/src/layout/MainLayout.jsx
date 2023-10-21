import React from "react";
import { Outlet } from "react-router";
import TopInfo from "../components/TopSection/TopInfo";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div>
      <TopInfo />
      <HeaderSection />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
