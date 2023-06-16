import React from "react";
import Header from "../components/General/Header";
import SideBar from "../components/General/SideBar";
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
