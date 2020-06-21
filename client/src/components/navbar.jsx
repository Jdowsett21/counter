import React, { Component } from "react";

const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        NavBar
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

export default NavBar;
