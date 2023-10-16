import React from "react";
import { Outlet } from "react-router";
import TopInfo from "../components/TopInfo";

function MainLayout() {
  return (
    <div>
      <TopInfo/>
      <Outlet />
    </div>
  );
}

export default MainLayout;
