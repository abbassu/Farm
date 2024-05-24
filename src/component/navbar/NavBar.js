// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">الصفحة الرئيسية </Link>
        </li>

        <li className="nav-item">
          <Link to="/clientInformation">كشف زبون</Link>
        </li>
        <li className="nav-item">
          <Link to="/neworder">طلبية جديدة</Link>
        </li>
        <li className="nav-item">
          <Link to="/newclient">زبون جديد</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
