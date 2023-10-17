import React from "react";
import { Outlet } from "react-router";
import TopInfo from "../components/TopSection/TopInfo";
import HeaderSection from "../components/HeaderSection/HeaderSection";


function MainLayout() {
  return (
    <div>
      <TopInfo/>
      <HeaderSection/>
      <Outlet />
    </div>
  );
}

export default MainLayout;
