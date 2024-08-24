import React from "react";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default index;
