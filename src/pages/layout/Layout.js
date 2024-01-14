// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../component/navbar/NavBar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
