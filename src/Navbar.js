import React from "react";
import "./Navbar.css";
import logo from "./assets/default.svg";

export default function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar-menu">
        <li id="logo">
          <a href="#">
            <img src={logo} alt="logo" height="30" />
          </a>
        </li>
        <li>
          <a href="#">Menu1</a>
        </li>
        <li>
          <a href="#">Menu2</a>
        </li>
      </ul>
      <ul className="Navbar-menu">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
}
