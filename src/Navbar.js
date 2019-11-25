import React from "react";
import "./Navbar.css";
import logo from "./assets/default.svg";

export default function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar-menu">
        <li id="logo">
          <button>
            <img src={logo} alt="logo" height="30" />
          </button>
        </li>
        <li>
          <button>Menu1</button>
        </li>
        <li>
          <button>Menu2</button>
        </li>
      </ul>
      <ul className="Navbar-menu">
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Register</button>
        </li>
        <li>
          <button>Account</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}
