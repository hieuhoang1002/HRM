import React from "react";
import Header from "../components/component/General/Header";
import SideBar from "../components/component/General/SideBar";
import { Outlet } from "react-router-dom";

const General = () => {
  return (
    <div>
      <SideBar />
      <Header />

      <Outlet />
    </div>
  );
};

export default General;
